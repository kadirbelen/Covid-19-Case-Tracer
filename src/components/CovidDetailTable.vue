<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ülke</th>
          <th scope="col">Ölüm Sayısı</th>
          <th scope="col">Test Sayısı</th>
          <th scope="col">Vaka Sayısı</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in data" :key="index">
          <td scope="row">{{index}}</td>
          <td>{{item.country}}</td>
          <td>{{item.deaths.total }}</td>
          <td>{{item.tests.total}}</td>
          <td>{{item.cases.total}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      data: null,
    };
  },
  filters:{
    numberFormat(number){
      return number.toLocaleString();
    }
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

      axios
        .request(options)
        .then(response => {
         
          this.data=response.data.response;
           console.log(response.data);
        });
        // .catch(function (error) {
        //   console.error(error);
        // });
    },
    
  },
  mounted(){
    this.getAllCountriesCovidCase();
  }
};
</script>

<style></style>
