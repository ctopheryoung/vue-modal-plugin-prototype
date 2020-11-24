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
      this.close();
    })
  },
  data() {
    return {
      modal: null
    }
  },
  methods: {
    open(component, props = {}) {
      this.modal = {
        component,
        props
      }
    },
    confirm(component, props) {
      this.modal = {
        component,
        props
      }
    },
    close() {
      this.modal = null;
    }
  }
}
</script>