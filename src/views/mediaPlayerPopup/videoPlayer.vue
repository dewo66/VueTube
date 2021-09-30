<template>

  <div>
    <video class="flex" width="765" height="430" src="//www.turkanime.net/imajlar/404.mp4" loop controls></video>
    <videoPlayerController/>
  </div>
</template>

<script>

import videoPlayerController from "./videoPlayerController.vue"

export default {
  components:{
videoPlayerController
  },
  data() {
    return {
    };
  },
  watch: {
  '$store.state.activeVideoData': function() {
    console.log(this.$store.state.activeVideoData)
  }
}
}



</script>


<!--


  this.$store.state.MusicData[0].data.forEach((item) => {
    this.provideData.todoList.push(item)
  })

  -->