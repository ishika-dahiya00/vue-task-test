<template>
  <div class="submitted-data mt-5">
    <h3>Submitted Data</h3>
    <div class="table-responsive">
      <table class="table table-striped mt-3">
        <thead class="thead-dark">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Minor</th>
            <th>DateOfBirth</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(submission, index) in submittedData" :key="index">
            <td>{{index + 1}}</td>
            <td>{{ submission.PERSON_NAME }}</td>
            <td>{{ submission.IS_PERSON_MINOR ? "Yes" : "No" }}</td>
            <td>{{ submission.PERSON_DOB }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    submittedData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.submitted-data {
  margin-top: 2rem;
}

.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  text-align: left;
  vertical-align: top;
}

.table th {
  background-color: #343a40;
  color: #fff;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-striped tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}
</style>
