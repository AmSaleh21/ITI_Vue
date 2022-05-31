<template>
  <p class="h3">Admins</p>
  <update-popup v-if="showUpdatePopup" :updateObject="this.updateAdmin" @update="sendUpdateAndHide(updateAdmin, index)"/>
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
          <button class="btn btn-danger mx-1" @click="$emit('delete', index)">Delete</button>
          <button class="btn btn-info mx-1" @click="showUpdateForm(admin, index)">Update</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UpdatePopup from "@/components/updatePopup";
export default {
  name: "adminsTable",
  components: {UpdatePopup},
  inject:['admins'],
  data(){
    return{
      showUpdatePopup: false,
      updateAdmin: [],
      index: -1
    }
  },
  methods: {
    showUpdateForm(admin, index){
      this.showUpdatePopup = true
      this.updateAdmin = admin
      this.index = index
    },
    sendUpdateAndHide(admin, index){
      this.showUpdatePopup = false
      this.$emit('update', admin, index)
    }
  }
}
</script>

<style scoped>

</style>