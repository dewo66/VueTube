<template>
  <div v-if="!loading" class="container">
    <Header />
    <router-view/>
<mediaContainer/>
<videoPlayerController > </videoPlayerController>
  </div>

</template>
<script>
import Header from "./views/header/header.vue";
import * as request from "./axios" 
import mediaContainer from "./views/mediaPlayerPopup/index.vue"
import videoPlayerController from "./views/mediaPlayerPopup/videoPlayerController.vue"
export default {
  components: {
    Header,
    mediaContainer,
    videoPlayerController

  },
  data() {
    return {
            loading: true,
    };
  },
  created() {
    request.getUsers().then((musicData) => {
    this.$store.commit("addMusicData", musicData);

  }) .finally(() => this.loading = false);
  
    request.getmixes().then((mixes) => {
    this.$store.commit("addMixesData", mixes);

  }) .finally(() => this.loading = false);
  },
  mounted () {
      document.querySelectorAll('div').forEach( (el) => {
      el.addEventListener('click', (e) => {
        this.musicPlayerOn(e)
})
      } );
    },
  methods:{
    musicPlayerOn(e){
      const th = this
      const classEnvanter = e.path[2].className.split(" ");
      classEnvanter.forEach(function(element) {
        if (element == "onWatch") {
    th.$store.commit("addActiveVideoData",th.$store.state.MusicData[0].data[0]);
    
         // e.path[2].style.display = "none"
         // this.$store.state.activeVideoData.artist = "dene"
          }
    }
)
    }
  }
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>
