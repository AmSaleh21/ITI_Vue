<template>
  <nav class="navbar navbar-expand-lg navbar-expand-md bg-dark">
    <div class="container-fluid">
      <label class="mx-2 p-button-sm p-button-outlined p-button-text">Fake news</label>
      <button class="navbar-toggler bi bi-list" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <Button label="Home" class="p-button-sm p-button-secondary p-button-text">
            <router-link to="/" class="nav-link active">Home</router-link>
          </Button>
          <Button label="Secondary" class="p-button-sm p-button-secondary p-button-text">
            <router-link to="/create-post" class="nav-link active">create post</router-link>
          </Button>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from 'primevue/button'
export default {
  name: "navigationBar",
  components: {
    Button
  }

}
</script>

<style scoped>
Button {
  height: 10px;
}
</style>