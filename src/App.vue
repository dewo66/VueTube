<template>
  <div class="container">
    <Header />
    <router-view/>
<mediaContainer/>
  </div>
</template>
<script>
import Header from "./views/header/header.vue";
import * as request from "./axios" 
import mediaContainer from "./views/mediaPlayerPopup/index.vue"
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

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>
