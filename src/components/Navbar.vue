<template>
  <div class="container mx-auto ">
    <!-- fixed z-10 -->
    <div class=" h-full w-full">
      <div class="flex justify-between item-center">
        <div class="lg:flex justify-start">
          <span class="sr-only">Amélíe Cout</span>
          <div class="w-40 lg:w-full">
            <img
              class="m-5"
              src="../assets/imagenes/logo.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="hidden lg:flex">
          <div class="flex justify-end ">
            <div class="flex items-center">
              <a href="#" class="text-lg mx-5">INICIO</a>
              <a href="#" class="text-lg mx-5">SERVICIOS</a>
              <a href="#" class="text-lg mx-5">NOSOTROS</a>
              <a href="#" class="text-lg mx-5">CONTACTO</a>
            </div>
          </div>
        </div>
        <!-- button menu -->
        <div class="lg:hidden" >
          <div class=" fixed right-5 mt-5 z-50">
            <button  v-on:click="abrir_menu" class="mx-auto">
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
          </div>
        </div>
         <div class="lg:hidden ">
          <div id="menu" class="fixed z-20 h-screen transform translate-x-full 
      duration-500 ease-in-out w-screen h-screen bg-blue-200"  >
            <div
            class="w-full h-full flex flex-col justify-center align-center uppercase font-medium"
            >
              <a href="#" class="text-3xl m-5">INICIO </a>
              <a href="#" class="text-3xl m-5">SERVICIOS</a>
              <a href="#" class="text-3xl m-5">NOSOTROS</a>
              <a href="#" class="text-3xl m-5">CONTACTOS</a>
           </div>
          </div>
        </div> 

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods:{
    abrir_menu: function () {
      if (
        document.getElementById("menu").classList.contains("-translate-x-full")
      ) {
        document.getElementById("menu").classList.remove("-translate-x-full");
        document.getElementById("menu").classList.remove("translate-x-full");
      } else {
        document.getElementById("menu").classList.remove("translate-x-full");
        document.getElementById("menu").classList.add("-translate-x-full");
      } 
    }
  }
};
</script>

<style></style>
