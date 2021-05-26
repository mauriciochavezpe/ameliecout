<template>
  <div id="header" class="w-full relative ">
    <NavbarVue />
    
    <div class="pt-24 h-full  ">
      <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-2">
        
        <div class="lg:col-start-2 flex w-full h-full">
          <div class="m-5 | w-full flex-col">
            <p class="text-4xl lg:text-7xl text-left break-words text-white drop-shadow-md">
              Disfrutar de un postre es amor a primera mordida...
            </p>

            <div class="mt-10 px-10 w-full flex justify-end">
              <button
                class=" border-blue-900 py-2 px-4 bg-blue-500 text-white bold-700 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-500"
              @click='irServicios'
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
    
      irServicios:function(){
      this.$router.push("Servicios")
    
    }
  }
};
</script>

<style>
#header {
  background-image: url('https://www.smallcakesnm.com/wp-content/uploads/2017/11/SCNM-PI54.jpg');
  background-repeat: no-repeat;
  background-position: center;
    /* background-attachment: fixed; */
  background-size: cover;
}
</style>
