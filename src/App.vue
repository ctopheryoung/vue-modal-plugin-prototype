<template>
  <div id="app">
    <div class="title">
      <div class="heading">Mmm, modals.</div>
      <div class="subheading">( a prototype )</div>
    </div>
    <div class="buttons">
      <button class="launch-btn" @click="openSimpleModal">Launch One</button>
      <button class="launch-btn" @click="openTheOtherSimpleModal">Launch Another</button>
      <button class="launch-btn" @click="openSimpleDialog">{{ dialogResultText ? dialogResultText : 'Launch Dialog'}}</button>
    </div>
    <div class="footer">
      <div class="by">
        Built by
        <a href="https://github.com/ctopheryoung" target="_blank">Chris Young</a>.
      </div>
      <a
        href="https://github.com/ctopheryoung/vue-modal-plugin-prototype"
        target="_blank"
        class="source"
      >( source )</a>
    </div>
  </div>
</template>

<script>
import SimpleModal from './components/modals/SimpleModal';
import AnotherSimpleModal from './components/modals/AnotherSimpleModal';
import SimpleDialog from './components/modals/SimpleDialog';

export default {
  name: 'App',
  data() {
    return {
      dialogResultText: ''
    };
  },
  methods: {
    openSimpleModal() {
      this.$modal.open(SimpleModal);
    },
    openTheOtherSimpleModal() {
      this.$modal.open(AnotherSimpleModal, {
        text: 'Yesss yess yessssssss!'
      });
    },
    openSimpleDialog() {
      if (this.dialogResultText) {
        return this.dialogResultText = '';
      }

      this.$modal
        .confirm(SimpleDialog)
        .then(() => this.dialogResultText = 'Confirmed! 🥳')
        .catch(() => this.dialogResultText = 'Denied! 😯');
    }
  }
};
</script>

<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
  background-color: #ebecf0;
  color: #6d7587;

  &:focus {
    outline: none;
  }
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
}

.buttons {
  display: flex;
}

.launch-btn {
  display: flex;
  justify-content: center;
  height: 50px;
  width: 280px;
  margin: 2em;
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
</style>
