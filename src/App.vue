<template>
  <div class="container">
    <Header />
    <router-view/>
<media-container/>
  </div>
</template>
<script>
import Header from "./views/header/header.vue";
import * as request from "./axios" 
import mediaContainer from "./views/mediaPlayerPopup/mediaContainer.vue"
export default {
  components: {
    Header,
    mediaContainer,
  },
  created() {
    request.getUsers().then((musicData) => {
    this.$store.commit("addMusicData", musicData);
  });
    request.getmixes().then((mixes) => {
    this.$store.commit("addMixesData", mixes);
  });
  }
};
</script>
