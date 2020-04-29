<template>
  <div class="mmmodal--container">
    <div class="mmmodal--overlay"></div>
    <div class="mmmodal--modal"><slot/></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offsetTop: 0
    };
  },
  methods: {
    disableBodyScroll() {
      // Keep track of the original scroll position
      this.offsetTop = document.documentElement.scrollTop;
      
      // Maintain scrolled position of page content behind modal
      document.body.style.top = `${ this.offsetTop * -1 }px`

      document.body.classList.add('mmmodal--block-scroll');
    },
    reenableBodyScroll() {
      document.body.classList.remove('mmmodal--block-scroll');

      // Remove the inline style
      document.body.style.top = null;

      // Restore the scroll position
      scrollTo({ top: this.offsetTop });
    }
  },
  beforeMount() {
    /**
     * Disable scrolling of page content behind the modal in a way that keeps
     * the scrollbar visible (to prevent page content from shifting)
     */
    this.disableBodyScroll();
  },
  beforeDestroy() {
    this.reenableBodyScroll();
  }
}
</script>

<style lang="scss">
.mmmodal--block-scroll {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.mmmodal--container {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;

  .mmmodal--overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: rgba($color: #000000, $alpha: 0.75);
  }

  .mmmodal--modal {
    position: relative;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
    background: none;
  }
}
</style>