<template>
<div>
<input type="text" v-model="search"  />
<ul>
  <li v-for="item in filteredList" :key="item" >
    {{ item }}
  </li>
</ul>
 </div>
</template>

<script>
export default {
    data() {
    return {
      search: "",
      itemList: [],
    };            
  },
  computed: {
    filteredList() {
      return this.itemList.filter((i) => i.includes(this.search));
    },
  },
  created() {
  this.$store.state.MusicData[0].data.forEach(( item ) => {
    this.itemList.push(item.artist)
    this.itemList.push(item.soundName)
});
  },

}
</script>

<style>

</style>