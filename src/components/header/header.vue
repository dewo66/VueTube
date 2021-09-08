<template>
  <div class="container">
    <div class="bFlex">
      <div class="img">
        <img src="" />
        <div>icon</div>
      </div>
      <div class="menu">
        <div
          class="anaSayfa"
          @click="$store.state.activeComponent = 'AnaSayfa'"
          href="#anaSayfa"
        >
          Ana Sayfa
        </div>
        <div
          class="kesfet"
          @click="$store.state.activeComponent = 'Kesfet'"
          href="#kesfet"
        >
          Keşfet
        </div>
        <div
          class="kitaplik"
          @click="$store.state.activeComponent = 'Kitaplik'"
          href="#kitaplik"
        >
          Kitaplık
        </div>
        <div
          class="yukselt"
          @click="$store.state.activeComponent = 'Yukselt'"
          href="#yukselt"
        >
          Yükselt
        </div>
        <div class="searchContainer">
          <!-- <div class="icon"><img src="" /></div>-->
          <div class="arayin" href="#arayin">Arayin</div>
        </div>
      </div>
      <div class="profilIcon">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLTwlbpdpMjGk3fIGdsM4rnNPDsOBc_t5f7hzhrm4Utn6A7UdhuDxqCDyVMPXBws=s108-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /*  activeComponent: this.$store.state.activeComponent,*/
    };
  },
  watch: {
    /*
    activeComponent: function (val) {
      this.$store.state.activeComponent = val;
      console.log(this.$store.state.MusicData)
    }, */
  },
};
</script>

<style >
@import "../../assets/header/header.css";
</style>