<template>
  <div id="header" class="w-full relative ">
    <NavbarVue />
    
    <div class="pt-24 h-full  ">
      <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-2">
        
        <div class="lg:col-start-2 flex w-full h-full">
          <div class="m-5 | w-full flex-col">
            <p class="text-4xl lg:text-7xl text-left break-words ">
              Disfrutar de un postre es amor a primera mordida...
            </p>

            <div class="mt-10 px-10 w-full flex justify-end">
              <button
                class=" border-blue-900 py-2 px-4 bg-blue-500 text-white bold-700 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-500"
              @click="verCatalogo"
              >
                Ver Catalogo
              </button>
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
  methods:{
    verCatalogo(){
      window.open("https://www.google.com/","_blank")
    }
  }
};
</script>

<style>
#header {
  /* background-image: url('../assets/imagenes/header.jpg'); */
  background-repeat: no-repeat;
  background-position: center 50%;
  /* width: 600px%; */
  background-size: cover;
}
</style>
