<template>
  <div class="containerVideoPlayer" v-if="activeVideoData">
      
  <div class="leftControls bflex">
      <div> icon</div>
      <div> icon</div>
      <div> icon</div>
      <div> 0.00/{{  Number((videoData.sound_time / 60).toFixed(2))}}  </div>
  </div>
  <div class="middleControls bflex">
      <img class="img" :src="videoData.image" >
      <div class="contentInfo" > 
        <div class="sound"> {{videoData.soundName}} </div>
        <div class="artisInfo bflex"> 
      <div class="artist" >{{videoData.artist}} </div>  * <hr>
      <div class="viewing" >  {{videoData.viewing}} Görüntülenme </div>  * <hr>
      <div class="like"> {{videoData.like}} beğeni </div>
          </div>
      </div>
      <div> icon</div>
      <div> icon</div>
      <div> icon</div>

  </div>
  <div class="rightControls bflex">
      <div> icon</div>
      <div> icon</div>
      <div> icon</div>
  </div>
  </div>

</template>


<script>
export default {
  components: {
  },
  data(){
    return {
      videoData:{}
    }
  },
  computed:{
    activeVideoData: function () {
      return this.$store.state.activeVideoData.artist !== undefined
    }
  },
  watch: {
  '$store.state.activeVideoData': function() {
    this.videoData = this.$store.state.activeVideoData
    console.log(this.videoData)
  }
}
  }
</script>

<style scoped >
.containerVideoPlayer {
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
z-index: 999;
left: 0;
bottom: 0;
width: 100%;
height: 4vw;
background-color: #212121;
}

.containerVideoPlayer * {
  background-color: #212121;

}

.containerVideoPlayer div * {
    margin-right: 1vw;
    background-color: #212121;

}

.bflex {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.contentInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}
.artisInfo {
  flex-wrap: nowrap;
}
.img {
  width: 50px;
  height: 50px;
}

</style>