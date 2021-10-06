<template>
<div class="container">
          <div class="header">{{ postTitle }}</div>
<div class="icerik">  
        <ul class="grid">
        <li  v-for="data in datas" :key=" data" > {{data}}</li>
        </ul>
    
</div>
</div>
</template>

<script>

export default {
    components:{
    }
    ,
props : {
    postTitle:{
      type:String,
      required:false,
      default:"başlık bölümü"
    },
    datas:{
      type:Array,
      required:false,
    }
  },
  data(){
    return {
      
ruhHalleriData:["Havam Yerinde",
"Romantizm",
"Rock ve Metal",
"Dizi ve Film Müzikleri",
"2010'lar",
"Rahatlama",
"Indie ve Alternatif",
"Mevsimler",
"Pop",
"Parti",
"1990'lar",
"Hip-Hop",
"Arabesk",
"2000'ler",
"Spor",
"Enerji",
"Türkü ve Geleneksel",
"Dans ve Elektronik",
"1970'ler",
"Klasik",
"1980'ler",
"Aile",
"Latin",
        ]
    }
  },created: function () {
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 5vw;
    margin-right: 5vw;
    margin-left: 4vw;
}
.header {
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
  flex-direction: column;
  flex-wrap: wrap;
}

.grid{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.grid li {
    padding: 10px;
    margin: 5px;
    border-left: 8px solid ;
    background-color: #292929;
    border-radius: 5px;
    height: 50px;
    width: 250px;
    border-left-color: #A4FFA4;
}
</style>