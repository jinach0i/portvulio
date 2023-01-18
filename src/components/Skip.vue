<template>
    <div id="skip">
        <ul>
            <li><a href="#entrance">현관으로 바로가기</a></li>
            <li><a href="#aboutme">About Me로 바로가기</a></li>
            <li><a href="#skills">Skills로 바로가기</a></li>
            <li><a href="#prjs">Projects로 바로가기</a></li>
            <li><a href="#contact">최하단으로 바로가기</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'SkipsAccessibility',
}
</script>

<style>
/* SKIP: */
#skip{position: absolute; background-color: black; padding: 0; font-size: 0; z-index: 99999;}
#skip ul li a{font-size: 0; text-align: center; color: white;}
#skip ul li a:focus{font-size: 16px; padding: 14px;}
</style>