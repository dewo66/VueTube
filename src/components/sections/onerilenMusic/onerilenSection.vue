<template>
  <div class="container">
    <div class="header">Önerilen Music videoları</div>
    <div class="slider">
      <div id="icerik1">
        <img
          id="resim1"
          class="img"
          width="400"
          src="https://i.ytimg.com/vi/XnSJFzixPhM/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&amp;rs=AMzJL3l5g3JGPmGAwp581cJXWtndJ5DT5w"
        />
        <div class="detail">
          <div class="title">Yıkılmam Asla</div>
          <div class="supTitle">
            <div class="solist">Ayça Özefe</div>
            <div class="goruntulenme">13 Mn görüntülenme</div>
          </div>
        </div>
      </div>
      <div id="icerik2">
        <img
          id="resim2"
          class="img"
          width="400"
          src="https://i.ytimg.com/vi/XnSJFzixPhM/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&amp;rs=AMzJL3l5g3JGPmGAwp581cJXWtndJ5DT5w"
        />
        <div class="detail">
          <div class="title">Yıkılmam Asla</div>
          <div class="supTitle">
            <div class="solist">Ayça Özefe</div>
            <div class="goruntulenme">13 Mn görüntülenme</div>
          </div>
        </div>
      </div>
      <div id="icerik3">
        <img
          id="resim3"
          class="img"
          width="400"
          src="https://i.ytimg.com/vi/XnSJFzixPhM/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&amp;rs=AMzJL3l5g3JGPmGAwp581cJXWtndJ5DT5w"
        />
        <div class="detail">
          <div class="title">Yıkılmam Asla</div>
          <div class="supTitle">
            <div class="solist">Ayça Özefe</div>
            <div class="goruntulenme">13 Mn görüntülenme</div>
          </div>
        </div>
      </div>
      <div id="icerik4">
        <img
          id="resim4"
          class="img"
          width="400"
          src="https://i.ytimg.com/vi/XnSJFzixPhM/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&amp;rs=AMzJL3l5g3JGPmGAwp581cJXWtndJ5DT5w"
        />
        <div class="detail">
          <div class="title">Yıkılmam Asla</div>
          <div class="supTitle">
            <div class="solist">Ayça Özefe</div>
            <div class="goruntulenme">13 Mn görüntülenme</div>
          </div>
        </div>
      </div>
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
    };
  },
  created() {
  console.log( this.$store.state.musicData)
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