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

export default {
  name: 'App',
  components: {
    siteForm,
    studentsTable,
    adminsTable
  },
  data() {
    return{
      students: JSON.parse(localStorage.getItem('students')) || [],
      admins: JSON.parse(localStorage.getItem('admins')) || [],
      /***********************************************************************
       *                        sample                                       *
       *       students: [{name:'abdelrahman', age:26, address:'suez'}],     *
       *       admins: [{name:'saleh', age:26, address:'suez'}],             *
       ***********************************************************************/
      choice: 'form',
    }
  },
  provide(){ //for table views (students & admins)
    return {
      students: this.students,
      admins: this.admins,
    }
  },
  methods: {
    updateStudentsLS(){
      localStorage.setItem('students', JSON.stringify(this.students))
    },
    updateAdminsLS(){
      localStorage.setItem('admins', JSON.stringify(this.admins))
    },
    addStudent(student) {
      this.students.push(student)
      this.updateStudentsLS()
    },
    addAdmin(admin) {
      this.admins.push(admin)
      this.updateAdminsLS()
    },
    deleteStudent(index){
      this.students.splice(index, 1)
      this.updateStudentsLS()
    },
    deleteAdmin(index){
      this.admins.splice(index, 1)
      this.updateAdminsLS()
    },
    updateStudent(student, index){
      this.students.splice(index, 1, student)
      this.updateStudentsLS()
    },
    updateAdmin(admin, index){
      this.admins.splice(index, 1, admin)
      this.updateAdminsLS()
    }
  }
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
