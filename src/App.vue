<template>
 <div class="container">
  <search-bar></search-bar>
  <covid-detail-table></covid-detail-table>
  </div>
</template>

<script>

import SearchBar from './components/SearchBar.vue'
import CovidDetailTable from './components/CovidDetailTable'

export default {
  name: 'App',
  components: {
    SearchBar,
    CovidDetailTable
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
