<template>
  <div class="container">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from "./views/header/header.vue";
import * as request from "./axios" 
export default {
  components: {
    Header,
  },
  created() {
    request.getUsers().then((musicData) => {
    this.$store.commit("addMusicData", musicData);
    console.log(this.$store )
  });

  }
};
</script>
