<template>
  <div id="wrap">
    <Skip />
    <Header />
    <swiper
    :direction="'vertical'" 
    :modules="modules" 
    :mousewheel="true"
    :loop="true"
    :slides-per-view="1" 
    :space-between="50" 
    :pagination="{
      type: 'progressbar',
      clickable: true,
    }"
    :navigation="true"
    @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide>
        <Entrance />
      </swiper-slide>
      <swiper-slide><About/></swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide><Contact /></swiper-slide>
    </swiper>
    
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Mousewheel,Thumbs } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import Skip from './components/Skip.vue';
import Header from './components/Header.vue';
import Entrance from './components/Entrance.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
    Skip,
    Header,
    Entrance,
    About,
    Contact,
  },
  setup() {
    let thumbsSwiper=null;
      const setThumbsSwiper=(a) => {
        thumbsSwiper=a;
      },
      return {
        onSwiper,
        onSlideChange,
        modules:[Pagination, Navigation,Mousewheel,Thumbs],
      };
    },
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
/* SWIPER: */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
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
