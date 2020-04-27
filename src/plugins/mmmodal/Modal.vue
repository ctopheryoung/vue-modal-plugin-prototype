<template>
  <div class="modal-container"><slot/></div>
</template>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.75);
}
</style>