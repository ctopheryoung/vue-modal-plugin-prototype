<template>
  <div id="app">
    <div class="title">
      <div class="heading">Mmm, modals.</div>
      <div class="subheading">(a prototype)</div>
    </div>
    <button class="launch-btn">Launch One</button>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
*, *:before, *:after {box-sizing:inherit;}

*{margin:0;padding:0;outline:none;list-style:none;font-weight:normal;font-size:inherit;appearance:none;border:none;background:transparent;color:inherit;}


#app {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ebecf0;
  color: #6d7587;
  height: 100vh;
  padding: 40px;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    .heading {
      font-size: 72px;
    }

    .subheading {
      font-size: 48px;
    }
  }

  .launch-btn {
    width: 200px;
    font: 16px/1 'Montserrat', sans-serif;
    background-color: #ebecf0;
    height: 3em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    background-image: linear-gradient(to bottom right, black, white);
    background-blend-mode: soft-light;
    text-align: center;
    border-radius: 22px;
    box-shadow: -5px -5px 10px 0 #fafbff, 5px 5px 10px 0 #a6abbd;

    &:hover {
      background-blend-mode: overlay;
    }

    &:active {
      transform: scale(0.975);
    }
  }
}
</style>
