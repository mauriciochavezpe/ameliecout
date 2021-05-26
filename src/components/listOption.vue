<template>
  <!-- eslint-disable -->
  <li
    @click="items"
    class="cursor-pointer text-left w-full h-full cursor-pointer | px-4 | py-1"
  > 
    <div class="w-full flex justify-center items-center">
      <div class="w-8 h-8">
        <img class="w-full" :src="name.img" alt="" />
      </div>
      <div class="w-full flex">
        <span class="px-4">
          {{ name.nombre }}
        </span>
      </div>
    </div>
  </li>
</template>

<script>
/* eslint-disable */
export default {
  props: ["name"],
  methods: {
    items: function(event) {
      let _name = event.target.innerText;
      console.log(this.name.nombre);
      // this.$listeners;
      this.$emit("changeName", this.name);
    },
  },
};
</script>

<style></style>
