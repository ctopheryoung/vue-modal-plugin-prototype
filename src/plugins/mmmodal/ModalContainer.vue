<template>
  <div>
    <modal v-if="modal">
      <component :is="modal.component" v-bind="modal.props" />
    </modal>
  </div>
</template>

<script>
import Plugin from './index';

export default {
  created() {
    this.$root._modalContainer = this;
  },
  beforeMount() {
    Plugin.event.$on('closeEvent', () => {
      this.hide();
    })
  },
  data() {
    return {
      modal: null
    }
  },
  methods: {
    show(component, props = {}) {
      this.modal = {
        component,
        props
      }
    },
    hide() {
      this.modal = null;
    }
  }
}
</script>