<template>
  <p class="h3">Admins</p>
  <div>
    <table class="table table-striped table-dark table-hover">
      <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>address</th>
        <th>actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="admin,index in admins" :key=index>
        <td>{{ index+1 }}</td>
        <td>{{ admin.name }}</td>
        <td>{{ admin.age }}</td>
        <td>{{ admin.address }}</td>
        <td>
          <button class="btn btn-danger" @click="$emit('delete', index)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "adminsTable",
  inject:['admins']
}
</script>

<style scoped>

</style>