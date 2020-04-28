<template>
  <div>
    <modal v-if="modal">
      <component :is="modal.component" />
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
    show(component) {
      this.modal = {
        name: 'Fuck!',
        component
      }
    },
    hide() {
      this.modal = null;
    }
  }
}
</script>