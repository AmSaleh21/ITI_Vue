<template>
  <p class="h3">students</p>
  <table class="table table-striped table-dark table-hover">
    <thead>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>age</th>
      <th>location</th>
      <th>actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="student,index in students" :key=index>
      <td>{{ index+1 }}</td>
      <td>{{ student.name }}</td>
      <td>{{ student.age }}</td>
      <td>{{ student.address }}</td>
      <td>
        <button class="btn btn-danger" @click="$emit('delete',index)">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "studentsTable",
  inject:['students']
}

</script>

<style scoped>

</style>