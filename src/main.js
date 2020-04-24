import Vue from 'vue'
import App from './App.vue'
import mmmodals from './plugins/mmmodals';

Vue.config.productionTip = false

Vue.use(mmmodals);

new Vue({
  render: h => h(App),
}).$mount('#app')
