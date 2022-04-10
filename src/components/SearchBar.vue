<template>
 <div class="input-group mb-3">
    <input  type="text" @keyup="handleChange" @change="handleChange" v-model="searchText" class="form-control" placeholder="Ülke ismini giriniz">
   

</div>
</template>

<script>
export default {
  data(){
    return{
      searchText:''
    }
  },
  methods:{
    handleChange(){
      this.$emit('searchRequested',this.searchText);
    }
  }
 
}
</script>

<style>
#btnSearch {
  margin-left: 10px;
}
</style>
