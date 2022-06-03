<template>
  <div>
    <div class="d-flex p-5 justify-content-center">
      <button class="btn btn-secondary mx-2" @click="choice = 'form'">form</button>
      <button class="btn btn-secondary mx-2" @click="choice = 'students'">students</button>
      <button class="btn btn-secondary mx-2" @click="choice = 'admins'">admins</button>
    </div>
    <div class="container">
      <site-form @students="addStudent" @admins="addAdmin" v-if="choice === 'form'"/>
      <students-table v-if="choice === 'students'" @delete="deleteStudent" @update="updateStudent"/>
      <admins-table v-if="choice === 'admins'" @delete="deleteAdmin" @update="updateAdmin"/>
    </div>
  </div>
</template>

<script>

import siteForm from "@/components/siteForm";
import studentsTable from "@/components/studentsTable";
import adminsTable from "@/components/adminsTable"
import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    siteForm,
    studentsTable,
    adminsTable
  },
  setup() {
    //properties
    let students = ref( JSON.parse(localStorage.getItem('students')) || [] )
    let admins = ref( JSON.parse(localStorage.getItem('admins')) || [] )
    /***********************************************************************
     *                        sample                                       *
     *       students: [{name:'abdelrahman', age:26, address:'suez'}],     *
     *       admins: [{name:'saleh', age:26, address:'suez'}],             *
     ***********************************************************************/
    let choice = ref('form')

    //functions
    function updateStudentsLS(){
      localStorage.setItem('students', JSON.stringify(students.value))
    }
    function updateAdminsLS(){
      localStorage.setItem('admins', JSON.stringify(admins.value))
    }
    function addStudent(student) {
      students.value.push(student)
      updateStudentsLS()
    }
    function addAdmin(admin) {
      admins.value.push(admin)
      updateAdminsLS()
    }
    function deleteStudent(index){
      students.value.splice(index, 1)
      updateStudentsLS()
    }
    function deleteAdmin(index){
      admins.value.splice(index, 1)
      updateAdminsLS()
    }
    function updateStudent(student, index){
      students.value.splice(index, 1, student)
      updateStudentsLS()
    }
    function updateAdmin(admin, index){
      admins.value.splice(index, 1, admin)
      updateAdminsLS()
    }

    return {
      students,
      admins,
      choice,
      addStudent,
      addAdmin,
      deleteStudent,
      deleteAdmin,
      updateStudent,
      updateAdmin
    }
  },
  provide(){ //for table views (students & admins)
    return {
      students: this.students,
      admins: this.admins,
    }
  },
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background-color: #181a1b;
}

body, p, label {
  color: #e8e6e3;
}
</style>
