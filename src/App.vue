<template>
  <Skip />
  <Header />
  <div id="container">
    <Entrance />
  </div>
</template>

<script>
import Skip from './components/Skip.vue';
import Header from './components/Header.vue';
import Entrance from './components/Entrance.vue';
export default {
  name: 'App',
  components: {
    Skip,
    Header,
    Entrance,
  }
}
</script>

<style>
@font-face{src: url('./assets/fonts/Gong\ Gothic\ Medium.ttf'); font-family: '공체';}
*{box-sizing: border-box; font-family: '공체','Oswald', sans-serif; margin: 0; padding: 0;}
li{list-style: none;}
button{border: none; cursor: pointer; background-color: transparent;}
a{text-decoration: none; color: black;}
#app{}
.hidden{display: block; text-indent: -9999px; font-size: 0;}
.undisplay{display: none;}
#container{width: 100%; margin: 0 auto;}

@media screen and (max-width: 1024px){
    #header{height: 48px; line-height: 48px;}
    #header .inner{min-width: 767px;}
    #header .inner h1{position: absolute; top: 11%; left: 2%;}
    #header .inner h1 a img{width: 48px;}
    #header .inner a.menu-btn{position: absolute; right: 2%;}
}
@media screen and (max-width: 767px){
    #header{height: 48px; line-height: 48px;}
    #header .inner{min-width: 480px;}
    #header .inner h1{position: absolute; top: 11%; left: 2%;}
    #header .inner h1 a img{width: 48px;}
    #header .inner a.menu-btn{position: absolute; right: 2%;}
}
@media screen and (max-width: 480px){
    #header{height: 40px; line-height: 40px;}
    #header .inner{min-width: 380px;}
    #header .inner h1{position: absolute; top: 11%; left: 2%;}
    #header .inner h1 a img{width: 36px;}
    #header .inner a.menu-btn{position: absolute; right: 2%;}
}
</style>
