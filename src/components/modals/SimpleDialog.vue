<template>
  <div class="modal">
    <div class="content">
      <div class="header">
        <div class="title">Dialog</div>
      </div>
      <div class="body">
        Any content can go here. The method that opened this dialog returns a promise that resolves or rejects based on which button you click. Choose wisely.
      </div>
      <div class="buttons">
        <button class="launch-btn" @click="onConfirm">Confirm</button>
        <button class="launch-btn" @click="onDeny">Deny</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resolve: Function,
    reject: Function
  },
  methods: {
    onConfirm() {
      this.resolve();
      this.$modal.close();
    },
    onDeny() {
      this.reject();
      this.$modal.close();
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: calc(100% - 48px);
  max-width: 600px;
  background-color: #ffffff;

  .content {
    border-radius: 3px;
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