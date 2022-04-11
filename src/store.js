import Vuex from 'vuex'
import axios from "axios";

export default new Vuex.Store({
    state: {
        covidData: [],
        covidFilteredData: [],
    },
    mutations: {
        initCovidData(state, covidData) {
            state.covidData = covidData
        },
        initCovidFilteredData(state, covidFilteredData) {
            state.covidFilteredData = covidFilteredData
        },

    },
    actions: {
        initApp(context) {
            const options = {
                method: "GET",
                url: "https://covid-193.p.rapidapi.com/statistics",
                headers: {
                    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
                    "X-RapidAPI-Key": "acd5c04867mshec3ef412b9b1997p1a3c44jsn298f37dfdb15",
                },
            };

            axios.request(options).then((response) => {
                console.log(response.data)
                context.commit('initCovidData', response.data.response)
                context.commit('initCovidFilteredData', response.data.response)

            });
        }
    },
    getters: {
        getCovidData(state) {
            return state.covidData
        },
        getCovidFilteredData(state) {
            return state.covidFilteredData
        },
    }

})