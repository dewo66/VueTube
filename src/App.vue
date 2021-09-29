<template>
  <div v-if="!loading" class="container">
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
  }
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>
