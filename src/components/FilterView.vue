<template>
  <div>
    <span v-if="FilterData.length > 0">
      Filter By State:
      <span v-for="filter in FilterData" :key="filter" class="badge bg-primary m-2">
        {{ filter }}
      </span>
    </span>
    <span v-if="searchBy.value">
      {{ searchBy.type }}: <span class="badge bg-secondary m-2"> {{ searchBy.value }}</span>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    FilterData() {
      return this.$store.state.filterStructure;
    },
    searchBy() {
      return this.$store.state.searchBy;
    },
  },
};
</script>
