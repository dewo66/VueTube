<template>
<div class="container" > 

<div class="soungVideoPlayer"> <videoPlayer/> </div>

<div class="musicPlayerPage">Bazı önerilen Muzikler Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus officia earum tenetur tempora provident, illum amet omnis nobis, recusandae nihil delectus obcaecati necessitatibus. Vel, laudantium repudiandae debitis animi officiis quibusdam?</div>




    </div>
</template>

<script>
import videoPlayer from "./videoPlayer.vue"
export default {
components:{
    videoPlayer
}
}
</script>

<style scoped >
.container {
    margin-top:3vw;
    width: 100%;
    height: 100%;
    z-index: 97;
    position: fixed;
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


</style>