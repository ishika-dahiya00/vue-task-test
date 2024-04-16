<template>
  <div class="pagination">
    <button class="btn btn-primary" @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span class="mx-2">{{ currentPage }}</span>
    <button class="btn btn-primary" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit("pageChange", this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit("pageChange", this.currentPage + 1);
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  text-align: center;
}
.pagination button {
  margin: 0 5px;
}
</style>
