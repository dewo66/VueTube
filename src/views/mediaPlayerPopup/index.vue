<template>
<div  class="popopContainer"  v-if="activeVideoData">

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
},
  computed:{
    activeVideoData: function () {
      return this.$store.state.activeVideoData.artist !== undefined
    }
  },

}
</script>

<style scoped >
.popopContainer {
    display: flex;
    position: fixed;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 3vw;
    height: 100%;
    z-index: 9;
}

</style>