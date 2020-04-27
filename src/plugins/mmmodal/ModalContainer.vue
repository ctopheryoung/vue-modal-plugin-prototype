<template>
  <div>
    <Modal v-if="modal">
      <component :is="modal.component" />
    </Modal>
  </div>
</template>

<script>
export default {
  created() {
    this.$root._modalContainer = this;
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
  },
  beforeMount() {
    this.$root.$on('openEvent', (component) => {
      this.show(component)
    })
    this.$root.$on('closeEvent', () => {
      this.hide();
    })
  },
  beforeDestroy() {
    this.$root.$off();
  },
}
</script>