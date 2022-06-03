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
        <button class="btn btn-danger mx-1" @click="deleteStudent(index)">Delete</button>
        <button class="btn btn-info mx-1" @click="showUpdateForm(student, index)">Update</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import UpdatePopup from "@/components/updatePopup";
import { ref } from 'vue'

export default {
  name: "studentsTable",
  components: {UpdatePopup},
  inject:['students'],
  emits:['update', 'delete'],
  setup(props, {emit}) {
    let showUpdatePopup = ref(false)
    let updateStudent = ref([])
    let ind = ref(-1)

    //functions
    function showUpdateForm(student, index){
      showUpdatePopup.value = true
      updateStudent.value = student
      ind = index
    }

    function sendUpdateAndHide(student, index){
      showUpdatePopup.value = false
      emit('update', student, index)
    }

    function deleteStudent(index){
      emit('delete', index)
    }

    return {
      showUpdatePopup,
      updateStudent,
      index: ind,
      showUpdateForm,
      sendUpdateAndHide,
      deleteStudent,
    }
  },
}

</script>

<style scoped>

</style>