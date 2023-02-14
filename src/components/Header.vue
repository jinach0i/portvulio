<template>
    <header id="header" class="header">
        <div class="inner">
            <h1><router-link to="/" title="home"><img src="../assets/img/favicon/ms-icon-70x70.png" alt="logo"></router-link></h1>
            <nav id="nav" class="off" v-if="switchMenu==true">
                <ul>
                    <li><a href="#entrance">ENTRANCE</a></li>
                    <li><a href="#aboutme">ABOUT ME</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#prjs">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
            <a href="#" class="menu-btn" :class="[switchX==true?'menu-btnon on':'']"  @click="switchMenu=!switchMenu;  switchX=!switchX">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
    </header>
</template>

<script>

export default {
    name: 'TheHeader',
    data() {
        return {
            switchMenu: false,
            switchX: false,
        }
    },
    methods: {
        
    },
}
</script>

<style>
#header{width: 100%; height: 60px; line-height: 60px; position: fixed; top: 0; left: 0; right: 0;}
#header .inner{min-width: 1130px; height: 60px; line-height: 60px; padding: 0 30px; margin: 0 auto; display: flex; justify-content: space-between; align-content: center;}
#header .inner h1{width: 20%;}
#header .inner h1 a img{max-height: 60px; padding: 2%;}
#header .inner #nav{width: 100%; padding: 0 8%; transition: all .4s; }
#header .inner #nav ul{display: flex;}
#header .inner #nav ul li{width: 25%; text-align: center;}
#header .inner #nav ul li:hover a{color: #95defb; transition: all .8s;}
#header .inner .menu-btn{transform: translateX(-20%); position: relative; top: 0; right: 3%; width: 40px; height: 100%;}
/* @keyframes changeBackColor {
    from{background-color: gold;}
    to{background-color: turquoise;}
} */
#header .inner .menu-btn span{position: absolute; left: 50%;  width: 30px; height: 3px; background-color: #ad937f; transition: all .6s;}
#header .inner .menu-btn span:nth-child(1){top: 35%;}
#header .inner .menu-btn span:nth-child(2){top: 50%;}
#header .inner .menu-btn span:nth-child(3){top: 65%; width: 24px;}
#header .inner .on span:nth-child(1){top: 56%; left: 22%; transform: rotate(45deg);}
#header .inner .on span:nth-child(2){width: 10px; height: 10px; border-radius: 50%; background-color: lightblue ; opacity: .4; left: 50%;}
#header .inner .on span:nth-child(3){top: 56%; left: 22%; width: 30px; transform: rotate(-45deg);}
</style>