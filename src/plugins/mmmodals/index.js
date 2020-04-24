/* eslint-disable */
import ModalContainer from '@/components/ModalContainer';

export default {
  install(Vue) {
    if (this.installed) {
      return;
    }

    this.installed = true;
    
    const root = new Vue({
      render: h => h(ModalContainer)
    }).$mount(document.body.appendChild(document.createElement('div')))

    root.$on('open', () => { console.log('opened') });
    root.$on('close', () => { console.log('closed') })

    Vue.prototype.$mmmodal = root;
  }
}
