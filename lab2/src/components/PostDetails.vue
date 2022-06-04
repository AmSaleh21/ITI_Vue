<template>
  <Dialog :header="`${post.title} (${post.createdAt})`" v-model:visible="displayMaximizable"
          :style="{width: '50vw'}" :maximizable="true" :draggable="false" :closable="false" :modal="true">
    <p class="m-0">
      {{ this.post.description }}
    </p>
    <template #footer>
        <router-link class="btn btn-sm btn-danger pi pi-times" to="/">close</router-link>
    </template>
  </Dialog>
</template>

<script>
import axios from 'axios';
import Dialog from 'primevue/dialog';
export default {
  name: "PostDetails",
  props:['id'],
  components: {
    Dialog
  },
  data () {
    return {
      post : {
        id: '',
        title: '',
        createdAt: '',
        image: '',
        description: '',
      },
      displayMaximizable: false
    }
  },
  watch:{
    id(){
      this.getPostDetails()
    }
  },
  created() {
    this.getPostDetails()
  },
  methods: {
    async getPostDetails() {
      await axios
          .get(`http://localhost:3000/news?id=${this.id}`)
          .then(response => this.post = {
            ...response.data[0]
          })
          .then( () => {
            this.displayMaximizable = true
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
}
</script>

<style scoped>

</style>