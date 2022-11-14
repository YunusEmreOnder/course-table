import Vue from 'vue'
import App from './App.vue'
import store from './store'
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/css/layout.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
moment.locale('en');
Vue.use(moment);
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
