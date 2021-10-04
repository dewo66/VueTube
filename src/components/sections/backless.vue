<template>
<div class="container">
      <div class="header">  {{postTitle}} </div>
      <div class="body">
          <div class="trends" v-for=" (data, index) in provideData.todoList" :key="data" >
            <div class="bFlex">             <img style="width: 50px; height: 50px; margin:2vw; " :src="data.image" alt=""> </div>
            <div class="bFlex" > {{ index+1 }} </div>
            <div class="bFlex" > 
              <div class="soundName"> {{data.soundName}} </div>
              <div class="icerik" > 
              <div class="solist"> {{data.artist}}</div>
              <div class="viewing"> {{data.viewing}} </div>
              </div>
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
  },
}
</script>

<style scoped>

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-left: 20vw;
  font-size: 50px;
  
}
.trends{
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
  height: 150px;
}
.trends div{
  margin-left: 5px;  padding: 5px;

}

.icerik {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bFlex{
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.body{
  display: grid;
  grid-template-columns: auto auto auto;
}


</style>