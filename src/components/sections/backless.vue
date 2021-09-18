<template>
<div class="container">
      <div class="header">  {{postTitle}} </div>
      <div class="body">
          <div class="trends" v-for=" (data, index) in provideData.todoList" :key="data" >
            <img style="width: 50px; height: 50px; margin:2vw; " :src="data.image" alt="">
            <div> {{ index+1 }} </div>
            <div class="icerik" > 

              <div class="soundName"> {{data.soundName}} </div>
              <div style="display:flex;" > 
              <div class="solist"> {{data.artist}}</div>
              <div class="viewing"> {{data.viewing}} </div> </div>
              </div>
          </div>
      </div>
</div>
</template>

<script>
export default {
props : {
    postTitle:{
      type:String,
      required:false,
      default:"başlık bölümü"
    }
  },
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
console.log(this.provideData.todoList)
  },
}
</script>

<style>
.trends{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  margin: 2vw;

}
.icerik {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

</style>