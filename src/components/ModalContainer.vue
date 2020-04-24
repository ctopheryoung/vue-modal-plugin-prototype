<template>
  <div class="modal-container">
    <div class="modal">
      <div class="content">
        <div class="header">
          <div class="title">Mmmmmmmm</div>
          <button class="close-btn">X</button>
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
  </div>
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
}
</style>