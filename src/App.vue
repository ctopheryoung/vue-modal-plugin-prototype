<template>
  <div id="app">
    <div class="title">
      <div class="heading">Mmm, modals.</div>
      <div class="subheading">( a prototype )</div>
    </div>
    <button class="launch-btn">Launch One</button>
    <div class="footer">
      <div class="by">Built by <a href="https://github.com/ctopheryoung" target="_blank">Chris Young</a>.</div>
      <a href="https://github.com/ctopheryoung/vue-mmmodal-plugin-prototype" target="_blank" class="source">( source )</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
  background-color: #ebecf0;
  color: #6d7587;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 96px;

    .heading {
      font-size: 72px;
      padding: 24px;
    }

    .subheading {
      font-size: 42px;
    }
  }

  .launch-btn {
    display: flex;
    justify-content: center;
    padding: 1em 4em;
    background-image: linear-gradient(to bottom right, black, white);
    background-blend-mode: soft-light;
    box-shadow: -5px -5px 10px 0 #fafbff, 5px 5px 10px 0 #a6abbd;
    border: none;
    border-radius: 22px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-blend-mode: overlay;
    }

    &:active {
      transform: scale(0.975);
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 28px;

    .by {
      font-size: 18px;
      padding: 12px;
    }

    .source {
      font-size: 14px;
      text-decoration: none;
    }
  }
}
</style>
