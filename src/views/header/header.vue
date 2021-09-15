<template>
  <div class="container">
    <div class="bFlex">
      <div class="img">
        <img src="" />
        <div>icon</div>
      </div>
      <div class="menu">
        <router-link class="nav-link" active-class="active" to="/Anasayfa">
          Anasayfa
        </router-link>
        <router-link class="nav-link" active-class="active" to="/Kesfet">
          Keşfet
        </router-link>
        <router-link class="nav-link" active-class="active" to="/Kitaplik">
          Kitaplık </router-link
        ><router-link class="nav-link" active-class="active" to="/Yukselt">
          Yükselt
        </router-link>
        <div class="searchContainer">
          <!-- <div class="icon"><img src="" /></div>-->
          <div class="arayin" href="#arayin" @click=" search=!search " >Arayin</div>
        </div>
      </div>
      <div class="profilIcon">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLTwlbpdpMjGk3fIGdsM4rnNPDsOBc_t5f7hzhrm4Utn6A7UdhuDxqCDyVMPXBws=s108-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </div>            <search v-if="search" style="  z-index: index 99; position:fixed; margin-top:10px; "  />

  </div>

</template>


<script>
import search from "../../components/sections/search/search.vue"
export default {
  components: {
    search,
  },
  data(){
    return {
      search:false,
    }
  },
  methods:{
    searching () {
      return this.search=true;
    }
  }}
</script>

<style scoped >
@import "../../assets/header/header.css";
.container {
  position: fixed;
  z-index: 99;
  
}
</style>