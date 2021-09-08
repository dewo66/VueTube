<template>
  <div class="AnaSayfa">Ana sayfa içerik</div>
  <div> {{ MusicData }} </div>
</template>

<script>
export default {

  data() {
    return {
      MusicData: this.$store.state.MusicData,
    };
  },
}
</script>

<style>

</style>