<template>
  <p class="h3">students</p>
  <update-popup v-if="showUpdatePopup" :updateObject="this.updateStudent" @update="sendUpdateAndHide(updateStudent, index)" />
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
        <button class="btn btn-danger mx-1" @click="$emit('delete',index)">Delete</button>
        <button class="btn btn-info mx-1" @click="showUpdateForm(student, index)">Update</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import UpdatePopup from "@/components/updatePopup";
export default {
  name: "studentsTable",
  components: {UpdatePopup},
  inject:['students'],
  data(){
    return{
      showUpdatePopup: false,
      updateStudent: [],
      index: -1
    }
  },
  methods: {
    showUpdateForm(student, index){
      this.showUpdatePopup = true
      this.updateStudent = student
      this.index = index
    },
    sendUpdateAndHide(student, index){
      this.showUpdatePopup = false
      this.$emit('update', student, index)
    }
  }
}

</script>

<style scoped>

</style>