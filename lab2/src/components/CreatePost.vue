<template>
<div class="container my-3 px-5">
  <p class="h3"> create </p>
  <form @submit.prevent>

      <div class="p-inputgroup my-2">
        <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
        </span>
        <InputText placeholder="title" v-model="formPost.title"/>
      </div>

    <div class="p-inputgroup my-2">
        <span class="p-inputgroup-addon">
            <i class="pi pi-image"></i>
        </span>
      <InputText placeholder="image" v-model="formPost.image"/>
    </div>

    <div class="p-inputgroup my-2">
        <span class="p-inputgroup-addon">
            <i class="pi pi-calendar"></i>
        </span>
    <Calendar v-model="date" selectionMode="single" dateFormat="dd/mm/yy"
              :showButtonBar="true" :showIcon="false" placeholder="created at"
              @date-select="selected"
    />
    </div>

    <div class="p-inputgroup my-2">
        <span class="p-inputgroup-addon">
            <i class="pi pi-align-justify"></i>
        </span>
      <Textarea v-model="formPost.description" :autoResize="true" rows="5" cols="50" placeholder="description"/>
    </div>

    <Button class="p-button p-button-outlined my-2" type="submit" label="Add" @click="submit"></Button>
  </form>
</div>
</template>

<script>
import Calendar from 'primevue/calendar'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea';
import Button from 'primevue/button'
import axios from "axios";
export default {
  name: "CreatePost",
  components: {
    Calendar,
    InputText,
    Textarea,
    Button,
  },
  data() {
    return {
      formPost : {
        title: '',
        createdAt: '',
        image: '',
        description: '',
      },
      date : ''
    }
  },

  methods: {
    submit() {
      axios.post('http://localhost:3000/news', {
        ...this.formPost
      })
          .then(() => this.$router.push('/'))
    },
    selected() {
      let today = this.date;
      let yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      this.formPost.createdAt = mm + '/' + dd + '/' + yyyy;
    },
  }
}
</script>

<style scoped>

</style>