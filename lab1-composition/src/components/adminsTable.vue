<template>
  <p class="h3">Admins</p>
  <update-popup v-if="showUpdatePopup" :updateObject="this.updateAdmin"
                @update="sendUpdateAndHide(updateAdmin, index)"/>
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
        <td>{{ index + 1 }}</td>
        <td>{{ admin.name }}</td>
        <td>{{ admin.age }}</td>
        <td>{{ admin.address }}</td>
        <td>
          <button class="btn btn-danger mx-1" @click="deleteAdmin(index)">Delete</button>
          <button class="btn btn-info mx-1" @click="showUpdateForm(admin, index)">Update</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UpdatePopup from "@/components/updatePopup";
import {ref} from 'vue';

export default {
  name: "adminsTable",
  components: {UpdatePopup},
  inject: ['admins'],
  emits:['update', 'delete'],
  setup(props, { emit }) {
    let showUpdatePopup = ref(false);
    let updateAdmin = ref([]);
    let ind = ref(-1)

    //functions
    function showUpdateForm(admin, index) {
      showUpdatePopup.value = true
      updateAdmin.value = admin
      ind = index
    }

    function sendUpdateAndHide(admin, index) {
      showUpdatePopup.value = false
      emit('update', admin, index)
    }

    function deleteAdmin(index){
      emit('delete', index)
    }

    return {
      showUpdatePopup,
      updateAdmin,
      index: ind,
      showUpdateForm,
      sendUpdateAndHide,
      deleteAdmin,
    }
  }
}
</script>

<style scoped>

</style>