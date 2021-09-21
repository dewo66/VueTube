<template>
<div class="container" > 

 <videoPlayer/> 

<musicPlayerPage/>

    </div>
</template>

<script>
import videoPlayer from "./videoPlayer.vue"
import musicPlayerPage from "./musicPlayerPage.vue"
export default {
components:{
    videoPlayer,
    musicPlayerPage
}

}
</script>

<style scoped >
.container {
    display: flex;
    width: 100%;
    margin-top: 3vw;
    height: 100%;
    z-index: 9;
    position: fixed;
}

.container div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 3vw;
    margin-right: 3vw;
}

</style>