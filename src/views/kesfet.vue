<template>
<div>
  <div class="header" >
    <div class="musicNavigationButton">
      <p class="icon">icon</p>
      <div>Yeni Çıkanlar </div>
      </div>
    <div class="musicNavigationButton">
      <p class="icon">icon</p>
      <div>Listeler </div>
      </div>
    <div class="musicNavigationButton">
      <p class="icon">icon</p>
      <div>Ruh halleri ve türleri </div>
    </div>
    </div>
  <section>
    <mixes postTitle="Yeni albümler ve tekliler" />
  </section>
  <section>
    <grid postTitle="Ruh halleri ve türleri" />
  </section>
  <section>
    <Sections postTitle="Yeni müzik videoları" />
  </section>
<section>
    <backless postTitle="Trend"/>
  </section>


</div>

</template>

<script>
import mixes from "../components/sections/mixes/mixes.vue"
import Sections from '../components/sections/sections.vue'
import grid from "../components/sections/grid.vue"
import backless from "../components/sections/backless.vue"
export default {
  components: {
    mixes,
    Sections,
    grid,
    backless
  }

}
    
</script>

<style scoped>

.header{
margin-top: 3vw;
width: 80%;
height: 5vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-right: 5vw;
margin-left: 9vw;
}

.header div {
  height: 3vw;
  width: 20vw;
  background-color: #212121;
  margin-right: 2vw;
}

.musicNavigationButton {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;   
border-radius: 0.1vw;

}
.musicNavigationButton div {
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
}

.icon {
  width: 1vw;
  height: 3vw;
  margin: 2vw;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: start;
    background-color: #212121;

}
</style>