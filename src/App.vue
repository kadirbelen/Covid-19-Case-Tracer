<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <search-bar @searchRequested="handleChange"></search-bar>
      </div>
      <div class="dropdown col-2">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ order }}
        </button>
        <div class="dropdown-menu">
          <h2 class="dropdown-header">Ölüm Sayısı</h2>
          <button class="dropdown-item" @click="sortLowestDead">
            Artan Sıralama
          </button>
          <button class="dropdown-item" @click="sortHeighDead">
            Azalan Sıralama
          </button>
          <h2 class="dropdown-header">Test Sayısı</h2>
          <button class="dropdown-item" @click="sortLowestTest">
            Artan Sıralama
          </button>
          <button class="dropdown-item" @click="sortHeighTest">
            Azalan Sıralama
          </button>
          <h2 class="dropdown-header">Vaka Sayısı</h2>
          <button class="dropdown-item" @click="sortLowestCase">
            Artan Sıralama
          </button>
          <button class="dropdown-item" @click="sortHeighCase">
            Azalan Sıralama
          </button>
        </div>
      </div>
    </div>
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
      order: "Sıralama",
    };
  },
  methods: {
    handleChange(value) {
      if (value.length > 0) {
        this.$store.state.covidFilteredData =
          this.$store.state.covidData.filter((post) =>
            post.country.toLowerCase().includes(value.toLowerCase())
          );
      } else {
        this.$store.state.covidFilteredData = this.$store.state.covidData;
      }
    },
    sortLowestDead() {
      this.order = "Ölüm Sayısı Artan Sıralama";
      this.covidFilteredData.sort((a, b) =>
        a.deaths.total > b.deaths.total ? 1 : -1
      );
    },
    sortHeighDead() {
      this.order = "Ölüm Sayısı Azalan Sıralama";
      this.covidFilteredData.sort((a, b) =>
        a.deaths.total < b.deaths.total ? 1 : -1
      );
    },
    sortHeighTest() {
      this.order = "Test Sayısı Azalan Sıralama";
      this.covidFilteredData.sort((a, b) =>
        a.tests.total < b.tests.total ? 1 : -1
      );
    },
    sortLowestTest() {
      this.order = "Test Sayısı Artan Sıralama";
      this.covidFilteredData.sort((a, b) =>
        a.tests.total > b.tests.total ? 1 : -1
      );
    },
    sortLowestCase() {
      this.order = "Vaka Sayısı Artan Sıralama";
      this.covidFilteredData.sort((a, b) =>
        a.cases.total > b.cases.total ? 1 : -1
      );
    },
    sortHeighCase() {
      this.order = "Vaka Sayısı Azalan Sıralama";
      this.covidFilteredData.sort((a, b) =>
        a.cases.total < b.cases.total ? 1 : -1
      );
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
