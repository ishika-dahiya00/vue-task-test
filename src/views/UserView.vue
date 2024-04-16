<template>
  <div class="container mt-7">
    <div class="row">
      <div class="col">
        <SearchView @emitUserSearch="searchUsers" />
      </div>
      <div class="col-2">
        <FilterSearch
          @emitUserFilter="filterUser"
          @emitSearchBy="searchBy"
        />
      </div>
    </div>
    <FilterView />
    <DataTable :userData="paginatedUserData" />
    <UserPagination :currentPage="currentPage" :totalPages="totalPages" @pageChange="changePage" />
  </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import FilterView from "@/components/FilterView.vue";
import SearchView from "@/components/SearchView.vue";
import FilterSearch from "@/components/FilterSearch.vue";
import UserPagination from "@/components/UserPagination.vue"

export default {
  name: "UserV",
  components: {
    DataTable,
    FilterView,
    SearchView,
    FilterSearch,
    UserPagination,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  methods: {
    searchBy(value, search) {
      console.log("value", value);
      console.log("search", search);
      const searchUsers = this.userData.filter((user) => {
        const nameMatch = user[value]
          .toLowerCase()
          .includes(search.toLowerCase());
        return nameMatch;
      });

      this.$store.dispatch("searchUser", searchUsers);
    },
    searchUsers(event) {
      const searchUsers = this.userData.filter((user) => {
        const nameMatch = user.name.toLowerCase().includes(event.toLowerCase());
        const usernameMatch = user.username
          .toLowerCase()
          .includes(event.toLowerCase());
        return nameMatch || usernameMatch;
      });

      this.$store.dispatch("searchUser", searchUsers);
    },
    filterUser(event) {
      console.log("-parm-", event);
    },
    changePage(page) {
      this.currentPage = page;
    }
  },
  mounted() {
    this.$store.dispatch("getUserDetails");
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    paginatedUserData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.userData.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.userData.length / this.itemsPerPage);
    },
  },
};
</script>
