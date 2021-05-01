<template>
  <div id="header" class="w-full relative">
    <NavbarVue class="" />
    <div class="grid grid-flow-row lg:grid-cols-2 grid-cols-1">
      <div>
        <!-- 1 -->
        </div>
      <div class="h-full">
        <!-- bg-blue-200 -->
        <div class="flex w-full h-full ">
          <div class="m-5 w-full flex-col">
            <p class="text-4xl lg:text-7xl text-left break-words ">Disfrutar de un postre es amor a primera mordida...</p>
            <!--   -->
            <div class="mt-10 px-10 w-full flex justify-end">
              <button  class=" border-blue-900 p-5 bg-blue-500 text-white bold-700 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-500">Ver Catalogo</button>
            </div>
          </div> 
        </div>
        </div>
    </div>
    <!-- <div class="w-full h-96">
        <img class="h-full w-full" src="../assets/imagenes/portada.jpg" alt="" srcset="">
    </div> -->
    <!-- <div class="h-96"></div> -->
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";

export default {
  components: {
    NavbarVue,
  },
};
</script>

<style>

#header{
  background-image: url('../assets/imagenes/header.jpg');
  background-repeat: no-repeat;
  background-position: center 50%;
  /* width: 600px%; */
  background-size: cover;

}
</style>
