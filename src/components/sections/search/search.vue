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
      itemList: ["elma", "armut", "kiraz", "çilek"],
    };            
  },
  computed: {
    filteredList() {
      return this.itemList.filter((i) => i.includes(this.search));
    },
  },

}
</script>

<style>

</style>