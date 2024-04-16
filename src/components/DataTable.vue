<template>
  <div>
    <table class="table mt-3">
      <thead>
        <tr>
          <th scope="col" class="text-start">Name</th>
          <th scope="col" class="text-start">Username</th>
          <th scope="col" class="text-start">Email</th>
          <th scope="col" class="text-start">Phone</th>
          <th scope="col" class="text-start">Company Name</th>
          <th scope="col" class="text-start">City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userData" :key="item.username">
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.company.name }}</td>
          <td>{{ item.address.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["userData"],
};
</script>
