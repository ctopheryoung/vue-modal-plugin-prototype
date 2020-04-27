import Vue from 'vue'
import App from './App.vue'
import mmmodal from './plugins/mmmodal';

Vue.config.productionTip = false

Vue.use(mmmodal);

new Vue({
  render: h => h(App),
}).$mount('#app')
