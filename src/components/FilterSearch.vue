<template>
  <div class="text-center">
    <button class="btn btn-primary" @click="dialog = true">Filter</button>

    <div v-if="dialog" class="modal" style="display: block;">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-white">Filtering</h5>
          </div>
          <div class="modal-body">
            <hr>
            <div class="row">
              <div class="col-md-6">
                <label>Search By</label>
                <select v-model="searchSelected" class="form-control">
                  <option v-for="option in searchOptions" :key="option">{{ option }}</option>
                </select>
              </div>
              <div class="col-md-6">
                <label>Value</label>
                <input type="text" v-model="search" class="form-control" placeholder="Search Here">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="dialog = false">Close</button>
            <button class="btn btn-danger" @click="resetFilters">Reset</button>
            <button class="btn btn-primary" @click="applyFilter">Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      search: null,
      filterData: [],
      searchSelected: null,
      dialog: false,
      searchOptions: ["name", "username", "email", "phone", "city"],
    };
  },
  methods: {
    resetFilters() {
      this.$store.dispatch("resetFilters");
      this.searchSelected= null;
      this.search= '';
      this.dialog = false;
      eventBus.$emit("reset-search", "reset");
      console.log("RESET");
    },
    applyFilter() {
      this.$store.dispatch("searchBy", {
        type: this.searchSelected,
        value: this.search,
      });
      this.$store.dispatch("applyFilter", this.filterData);
      this.dialog = false;
      this.$emit("emitUserFilter", this.filterData);
      this.$emit("emitSearchBy", this.searchSelected, this.search);
    },
  },
};
</script>
