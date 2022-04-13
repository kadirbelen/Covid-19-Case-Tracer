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
        <tr v-for="(item, index) in data" :key="index">
          <td scope="row">{{ index+1 }}</td>
          <td>{{ item.country }}</td>
          <td>{{ numberFormat(item.deaths.total) }}</td>
          <td>{{ numberFormat(item.tests.total) }}</td>
          <td>{{ numberFormat(item.cases.total) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
var numeral = require("numeral");
export default {
  data() {
    return {};
  },
  methods: {
    numberFormat(number) {
      return numeral(number).format("0,0,0,0");
    },
  },
  props: ["data"],
};
</script>

<style></style>
