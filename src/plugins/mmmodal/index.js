import Modal from './Modal';
import ModalContainer from './ModalContainer';

const getModalContainer = (Vue, root) => {
  /**
   * Create a plugin instance if one hasn't already been created.
   */
  if (!root._modalContainer) {
    const container = document.body.appendChild(document.createElement('div'));

    new Vue({
      name: 'Mmm, Modals',
      parent: root,
      render: h => h(ModalContainer)
    }).$mount(container);
  }

  return root._modalContainer;
}

const Plugin = {
  install(Vue) {
    this.rootInstance = null;
    this.event = new Vue();

    Vue.prototype.$mmmodal =  {
      open(modalComponent, props) {
        const modalContainer = getModalContainer(Vue, Plugin.rootInstance);
        modalContainer.open(modalComponent, props);
      },

      confirm(modalComponent) {
        return new Promise((resolve, reject) => {
          const modalContainer = getModalContainer(Vue, Plugin.rootInstance);
          modalContainer.confirm(modalComponent, { resolve, reject });
        })
      },

      close() {
        Plugin.event.$emit('closeEvent');
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
