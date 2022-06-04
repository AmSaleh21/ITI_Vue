<template>
  <div class="d-flex flex-wrap ms-4">
  <div class="mx-3 my-4" v-for="post in this.news" :key="post.id">
    <Card class="card">
      <template #header>
        <img :src="post.image" alt="image"/>
      </template>
      <template #title>
        {{ post.title }}
      </template>
      <template #subtitle>
        created at : {{ post.createdAt }}
      </template>
      <template #footer>
        <Button label="Details" class="p-button-sm mx-2">
          <router-link :to="`/post/${post.id}`" class="rLink">Details</router-link>
        </Button>
        <Button label="Delete" class="p-button-sm p-button-danger mx-2" @click="deletePost(post.id)">

        </Button>
      </template>
    </Card>
  </div>
  </div>
  <router-view></router-view>
</template>

<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
import axios from 'axios';
export default {
  name: "HomeView",
  components: {
    Card,
    Button,
  },data() {
    return {
      news: [],
    }
  },
  created() {
    this.getAllNews()
  },
  methods: {
    async getAllNews() {
      await axios
          .get('http://localhost:3000/news')
          .then( response => {
            if (response.status === 200){
              this.news = response.data;
            }else {
              alert(`couldn't retrieve data ${response.status}, please try again later `)
            }
          })
          .catch( err => console.log(err))
    },
    async deletePost(id) {
      await axios
          .delete(`http://localhost:3000/news/${id}`)
    }
  }
}
</script>

<style  scoped>
p {
  line-height: 1.5;
  margin: 0;
}
.rLink {
  width: inherit;
  height: inherit;
  text-decoration: none;
  color: black;
}
.card {
  width: 20em;
  border-radius: 10px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
img {
  height: 15rem;
  border-radius: 30px;
}
</style>