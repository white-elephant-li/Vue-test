import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@js/filters.js';
import '@js/htmlFontSize.js';
import '@js/axios.config';
import '@js/IsIphoneX';

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
