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
          @click="provideData.activeComponent = 'AnaSayfa'"
          href="#anaSayfa"
        >
          Ana Sayfa
        </div>
        <div class="kesfet" @click="provideData.activeComponent = 'Kesfet'" href="#kesfet">
          Keşfet
        </div>
        <div
          class="kitaplik"
          @click="provideData.activeComponent = 'Kitaplik'"
          href="#kitaplik"
        >
          Kitaplık
        </div>
        <div
          class="yukselt"
          @click="provideData.activeComponent = 'Yukselt'"
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
      provideData:{
      activeComponent: "AnaSayfa",

      }
    };
  },

  provide() {
    return {
      activeComponent: this.activeComponent,
    };
  },
};
</script>

<style >
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  flex-wrap: nowrap;
  background-color: black;
  color: white;
}
.bFlex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  flex-wrap: nowrap;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu div {
  margin-right: 10px;
}
.body {
  margin-top: 20px;
  color: black;
}
</style>