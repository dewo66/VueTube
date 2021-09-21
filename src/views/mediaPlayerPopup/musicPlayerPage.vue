<template>
<div id="icerik1"  v-for=" data in provideData.todoList " :key=" data" >
        <img
          id="resim1"
          class="img"
          width="100"
          height="100"
          :src="data.image"/>
        <div class="detail">
          <div class="title"> {{ data.soundName }} </div>
          <div class="supTitle">
            <div class="solist"> {{ data.artist }} </div>
            <div class="goruntulenme"> {{ data.like }} </div>
          </div>
        </div>
      </div>    
</template>

<script>export default {

  data() {
    return {
      provideData: {
        todoList: [],
      },
    };
  },
  created() {
  this.$store.state.MusicData[0].data.forEach(( item ) => {
    this.provideData.todoList.push(item)
});
  },
};
</script>

<style>

</style>