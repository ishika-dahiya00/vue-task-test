<template>
  <div class="col-4">
    <input type="text"
      v-model="search"
      @input="emitUserSearch"
      placeholder="Search Here"
      class="form-control"
    />
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "SearchView",
  data() {
    return {
      search: null,
    };
  },

  methods: {
    emitUserSearch() {
      this.$emit("emitUserSearch", this.search);
    },
  },
  created: function () {
    eventBus.$on("reset-search", (data) => {
      console.log("SUCCESS", data);
      this.search = null;
      // this.age = data;
      eventBus.$off("reset-search");
    });
  },
  watch: {
    search(newValue) {
      if (newValue === null || newValue === "" || newValue === undefined) {
        this.$store.dispatch("getUserDetails");
      }
    },
  },
};
</script>
