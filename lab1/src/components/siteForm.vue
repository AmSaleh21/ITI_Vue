<template>

  <form @submit.prevent>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter name" v-model.trim.lazy="formValues.name">
    </div>
    <div class="form-group">
      <label for="age">Age</label>
      <input type="number" class="form-control" id="age" placeholder="age" v-model.lazy="formValues.age">
    </div>
    <div class="form-group">
      <label for="address">address</label>
      <input type="text" class="form-control" id="address" placeholder="Enter location" v-model.trim.lazy="formValues.address">
    </div>
    <div class="form-check form-check-inline">
      <input @change="onChange($event)" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="student">
      <label class="form-check-label" for="inlineRadio1">student</label>
    </div>
    <div class="form-check form-check-inline">
      <input @change="onChange($event)" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="admin">
      <label class="form-check-label" for="inlineRadio2">admin</label>
    </div>
    <button type="submit" class="btn btn-primary m-4 p-2" @click="add" >Add</button>
  </form>
</template>

<script>
export default {
  name: "siteForm",
  props:['students', 'admins'],
  // inject: ['appStudents, appAdmins'],
  // provide:{
  //   formAdmins: this.appAdmins,
  //   formStudents: this.appStudents
  // },
  data(){
    return{
      formValues: {name:'', age:'', address:''},
      rank:'',
    }
  },
  methods:{
    add(){
      if(this.rank === 'student'){
        this.$emit('students', this.formValues)
        alert('added')
      }else if(this.rank === 'admin'){
        this.$emit('admins', this.formValues)
        alert('added')
      }else {
        alert('please select rank')
      }
    },
    onChange(event){
      this.rank = event.target.value
    }
  }
}

</script>

<style scoped>

</style>