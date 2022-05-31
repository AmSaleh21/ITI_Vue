<template>
  <div class="m-2">
    <input class="form-control-sm mx-1" type="text" v-model="formValues.name" :placeholder="formValues.name" />
    <input class="form-control-sm mx-1" type="number" v-model="formValues.age" :placeholder="formValues.age" />
    <input class="form-control-sm mx-1" type="text" v-model="formValues.address" :placeholder="formValues.address"/>
    <button class="btn btn-success btn-sm ms-2" @click="$emit('update', formValues)">update</button>
  </div>
</template>

<script>
export default {
  name: "updatePopup",
  props:['updateObject'],
  data(){
    return{
      formValues: this.updateObject,
      test: 'this is a test'
    }
  }
}
</script>

<style scoped>

</style>