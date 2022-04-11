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
          <td>{{item.deaths.total}}</td>
          <td>{{item.tests.total}}</td>
          <td>{{item.cases.total}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>



export default {
  data() {
    return {
     
    };
  },
  props:['data'],
  filters:{
    numberFormat(number){
      return number.toLocaleString();
    }
  }

};
</script>

<style></style>
