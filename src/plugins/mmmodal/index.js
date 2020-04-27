import Modal from './Modal';
import ModalContainer from './ModalContainer';

const getModalContainer = (Vue, root) => {
  /**
   * Dynamically inject the ModalContainer component onto the page
   */
  if (!root._modalContainer) {
    const container = document.body.appendChild(document.createElement('div'));

    new Vue({
      parent: root,
      render: h => h(ModalContainer)
    }).$mount(container);
  }

  return root._modalContainer;
}

const Plugin = {
  install(Vue) {
    this.rootInstance = null;

    Vue.prototype.$mmmodal =  {
      open(modalComponent) {
        const modalContainer = getModalContainer(Vue, Plugin.rootInstance);
        modalContainer.show(modalComponent);
      },

      close() {
        const modalContainer = getModalContainer(Vue, Plugin.rootInstance);
        modalContainer.$emit('closeEvent');
      }
    }

    /**
     * Register mmmodal components
     */
    Vue.component('Modal', Modal)
    Vue.component('ModalContainer', ModalContainer)

    Vue.mixin({
      beforeMount() {
        if (Plugin.rootInstance === null) {
          Plugin.rootInstance = this.$root;
        }
      }
    })
  }
}

export default Plugin;
