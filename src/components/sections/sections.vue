<template>
  <div class="container">
    <section>
      <div class="header">{{ postTitle }}</div>

    <div class="slider" >
<splide :options="options">
    <splide-slide  v-for=" data in provideData.todoList " :key=" data">
<div id="icerik1" >
        <img
          id="resim1"
          class="img"
          width="400"
          height="400"
          :src="data.image"/>
        <div class="detail">
          <div class="title"> {{ data.soundName }} </div>
          <div class="supTitle">
            <div class="solist"> {{ data.artist }} </div>
            <div class="goruntulenme"> {{ data.like }} </div>
          </div>
        </div>
      </div>    
      </splide-slide>
  </splide>
    </div>
    </section>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default {
  props : {
    postTitle:{
      type:String,
      required:false,
      default:"başlık bölümü"
    }
  },
  components:{
    
    Splide,
    SplideSlide,
  },
  data() {
    return {
      provideData: {
        todoList: [],
      },
        options: {    
type: 'slide',
width: 1500,
gap: '4vw',
pagination : false,
fixedWidth  : 350,
fixedHeight : 550,
focus: 'center',
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 5vw;
}
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 2vw;
  margin-top: 2vw;
  font-size: 2vw;
}
.slider {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.slider div {
  margin-right: 2vw;
}

.supTitle {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>