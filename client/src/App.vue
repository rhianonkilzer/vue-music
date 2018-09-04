<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: 'Gloria Hallelujah', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    text-shadow: 2px 2px 4px #000000;
    background-image: url('./assets/furryphones.jpg');
    height: 1187px;
    width: auto;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }

  .song {
    background-color: rgba(255, 255, 255, 0.103);
    border-radius: 8px 8px 8px 8px;
    width: 60%;
    margin-left: 6rem;
  }
</style>