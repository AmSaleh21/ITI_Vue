<template>
  <div>
    <div class="d-flex p-5 justify-content-center">
      <button class="btn btn-secondary mx-2" @click="choice = 'form'">form</button>
      <button class="btn btn-secondary mx-2" @click="choice = 'students'">students</button>
      <button class="btn btn-secondary mx-2" @click="choice = 'admins'">admins</button>
    </div>
    <div class="container">
      <site-form @students="addStudent" @admins="addAdmin" v-if="choice === 'form'"/>
      <students-table v-if="choice === 'students'" @delete="deleteStudent"/>
      <admins-table v-if="choice === 'admins'" @delete="deleteAdmin"/>
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
      students: [],
      admins: [],
      /***********************************************************************
       *                        sample                                       *
       *       students: [{name:'abdelrahman', age:26, address:'suez'}],     *
       *       admins: [{name:'saleh', age:26, address:'suez'}],             *
       ***********************************************************************/
      choice: 'form'
    }
  },
  provide(){
    return {
      students: this.students,
      admins: this.admins,
    }
  },
  methods: {
    addStudent(student) {
      this.students.push(student)
    },
    addAdmin(admin) {
      this.admins.push(admin)
    },
    deleteStudent(index){
      this.students.splice(index, 1)
    },
    deleteAdmin(index){
      this.admins.splice(index, 1)
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
