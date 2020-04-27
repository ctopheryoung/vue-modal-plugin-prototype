import Modal from './Modal';
import ModalContainer from './ModalContainer';

const Plugin = {
  install(Vue) {

    const root = new Vue({
      render: h => h(ModalContainer)
    }).$mount(document.body.appendChild(document.createElement('div')));

    Vue.prototype.$mmmodal =  {
      open(modalComponent) {
        root.$emit('openEvent', modalComponent);
      },

      close() {
        root.$emit('closeEvent');
      }
    }

    /**
     * Register mmmodal components
     */
    Vue.component('Modal', Modal)
    Vue.component('ModalContainer', ModalContainer)
  }
}

export default Plugin;
