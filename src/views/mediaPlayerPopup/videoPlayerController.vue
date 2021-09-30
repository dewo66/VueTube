<template>
  <div class="containerVideoPlayer">
      
  <div class="leftControls bflex">
      <div> icon</div>
      <div> icon</div>
      <div> icon</div>
      <div>0:00/3:14</div>
  </div>
  <div class="middleControls bflex">
      <img src="" alt="">
      <div class="contentInfo" >Alaisemai</div>
      <div class="middleControlButtons bflex">
      <div> icon</div>
      <div> icon</div>
      <div> icon</div>
      </div>

  </div>
  <div class="rightControls bflex">
      <div> icon</div>
      <div> icon</div>
      <div> icon</div>
  </div>
  </div>

</template>


<script>
export default {
  components: {
  },
  data(){
    return {
    }
  },
  }
</script>

<style scoped >
.containerVideoPlayer {
display: flex;
align-items: center;
justify-content: space-between;
}

.containerVideoPlayer div * {
    margin-right: 1vw;
}

.bflex {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}


</style>