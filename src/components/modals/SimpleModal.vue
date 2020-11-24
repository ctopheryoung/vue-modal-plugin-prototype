<template>
  <div class="modal">
    <div class="content">
      <div class="header">
        <div class="title">Mmmmmmmm</div>
        <button class="close-btn" @click="onClose">X</button>
      </div>
      <div class="body">
        Mmmmmmm mmm mmmmmmmmmmmmmmm mmmmmm mm m mmmmmmmmmmm mmm 
        mmmmmmmmmmmmmmm mmmmmm mm m mmmmmmmmmmm mmm mmmmmmmmmmmmmmm 
        mmmmmm mm m mmmmmmmmmmm mmm mmmmmmmmmmmmmmm mmmmmm mm m 
        mmmmmmmmmmm mmm mmmmmmmmmmmmmmm mmmmmm mm m mmmmmmmmmmm mmm 
        mmmmmmmmmmmmmmm mmmmmm mm m mmmmmmmmmmm mmm mmmmmmmmmmmmmmm 
        mmmmmm mm m mmmmmmmmmmm
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClose() {
      this.$modal.close();
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: calc(100% - 48px);
  max-width: 600px;

  .content {
    position: relative;
    padding: 20px;

    .header {
      display: flex;
      justify-content: space-between;
      margin-right: 18px;
      padding-bottom: 20px;

      .title {
        font-size: 32px;
      }
      .close-btn {
        position: absolute;
        top: 8px;
        right: 8px;
        align-self: flex-start;
        margin: 0;
        padding: 4px;
        border: none;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
}
</style>