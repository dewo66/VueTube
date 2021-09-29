<template>
<div class="musicDataContainer">

<div class="tabsContents ">
<div class="siradaki" @click="isActive = true" :class=" { activeTabContent:isActive} "  >Sıradaki</div>
<div class="sozler" @click="isActive=false" :class=" { activeTabContent:!isActive} " >Şarkı Sözleri</div>

</div>

<div class="tabs" v-if="isActive">
    <div class= "tab"  v-for=" data in provideData.todoList " :key=" data"  >
<div class="detail bflex">
        <img
          class="img"
          width="32"
          height="32"
          :src="data.image"/>
          <div class="supTitle">
                      <div class="title"> {{ data.soundName }} </div>
            <div class="solist"> {{ data.artist }} </div>
          </div>
        </div>
        <div> {{  Number((data.sound_time / 60).toFixed(2))}} </div>
        </div>
      

</div>
<div class="tabs" v-if="!isActive">
  <pre style="margin-top:1vw;">
    Haberin var mı taş duvar?
Demir kapı, kör pencere
Yastığım, ranzam, zincirim
Uğrunda ölümlere gidip geldiğim
Zulamdaki mahzun resim
Görüşmecim yeşil soğan göndermiş

Karanfil kokuyor cigaram cigaram
Dağlarına bahar gelmiş memleketimin
Karanfil kokuyor cigaram cigaram
Dağlarına bahar gelmiş memleketimin

Haberin var mı taş duvar?
Demir kapı, kör pencere
Yastığım, ranzam, zincirim
Uğrunda ölümlere gidip geldiğim
Zulamdaki mahzun resim
Görüşmecim yeşil soğan göndermiş

Karanfil kokuyor cigaram cigaram
Dağlarına bahar gelmiş memleketimin
Karanfil kokuyor cigaram cigaram
Dağlarına bahar gelmiş memleketimin

Karanfil kokuyor cigaram cigaram
Dağlarına bahar gelmiş memleketimin
Karanfil kokuyor cigaram cigaram
Dağlarına bahar gelmiş memleketimin
Kaynak: LyricFind
  </pre>
</div>

</div>    
</template>

<script>
export default {

  data() {
    return {
      provideData: {
        todoList: [],
      },
      isActive:true,
    };
  },
  created() {

    
    
  this.$store.state.MusicData[0].data.forEach((item) => {
    this.provideData.todoList.push(item)
  })
  },
};
</script>

<style scoped >
.musicDataContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tabsContents{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 30vw;
  }
  .tabsContents div {
    padding-bottom: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15vw;
  }
.tabs {
    width: 30vw;
    height: 35vw;

}
.tab{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  border-bottom: 0.001px solid gray;

}


.bflex{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}

.detail{
  margin:0.3vw;
}

.detail *{
  margin-right:1vw;
}

.activeTabContent{
  border-bottom: solid 0.1px white;
}


</style>