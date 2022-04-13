<template>
  <div class="container">
    <search-bar @searchRequested="handleChange"></search-bar>
    <covid-detail-table v-bind:data="filteredData"></covid-detail-table>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import CovidDetailTable from "./components/CovidDetailTable";
import axios from "axios";

export default {
  name: "App",
  components: {
    SearchBar,
    CovidDetailTable,
  },
  data() {
    return {
      data: null,
      filteredData:null
    };
  },
  methods: {
    getAllCountriesCovidCase() {
      const options = {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/statistics",
        headers: {
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
          "X-RapidAPI-Key":
            "acd5c04867mshec3ef412b9b1997p1a3c44jsn298f37dfdb15",
        },
      };

      axios.request(options).then((response) => {
        this.data = response.data.response;
        this.filteredData = response.data.response;
        console.log(response.data);
      });
      // .catch(function (error) {
      //   console.error(error);
      // });
    },
    handleChange(value) {

    
      if (value.length > 0) {
        console.log()
        this.filteredData = this.data.filter((post) =>
          post.country.toLowerCase().includes(value.toLowerCase())
       
        );
       
      } else{
        this.filteredData=this.data;
      }
    },
  },

  mounted() {
    this.getAllCountriesCovidCase();
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
