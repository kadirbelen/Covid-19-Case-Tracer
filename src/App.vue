<template>
  <div class="container">
    <search-bar @searchRequested="handleChange"></search-bar>
    <covid-detail-table v-bind:data="covidFilteredData"></covid-detail-table>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import CovidDetailTable from "./components/CovidDetailTable";


export default {
  name: "App",
  components: {
    SearchBar,
    CovidDetailTable,
  },
  data() {
    return {
    };
  },
  methods: {
    handleChange(value) {
      if (value.length > 0) {
        this.$store.state.covidFilteredData = this.$store.state.covidData.filter(post =>
          post.country.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        this.$store.state.covidFilteredData=this.$store.state.covidData;
      }
    },
  },
  created() {
    this.$store.dispatch("initApp");
  },
  computed: {
    covidFilteredData() {
      return this.$store.getters.getCovidFilteredData;
    },
  },
};
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
