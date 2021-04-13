import Vuex from 'vuex';
import Vue from 'vue';
import Tasks from "./modules/Tasks";

// Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
    modules: {
        Tasks
    }
})