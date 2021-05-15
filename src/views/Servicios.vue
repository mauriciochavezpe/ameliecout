<template>
  <div class="w-full">
    <!-- <DetalleProducto @openDialog="isEnabledModal = $event" v-if="isEnabledModal" /> -->
    <modal v-show="isEnabledModal" @openDialog="isEnabledModal = $event" />
    <Navbar />
    <div id="section-contacto" class=" pt-24">
      <div class="container mx-auto">
        <div class="lg:flex justify-between lg:mx-auto mx-4">
          <FilterService /> 
          <div
            class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <Producto @openDialog="isEnabledModal = $event" />
            <Producto @openDialog="isEnabledModal = $event" />
            <Producto @openDialog="isEnabledModal = $event" />
            <Producto @openDialog="isEnabledModal = $event" />
            <Producto @openDialog="isEnabledModal = $event" />
            <Producto @openDialog="isEnabledModal = $event" />
            <Producto @openDialog="isEnabledModal = $event" />
          </div>
        </div>
        <div class="w-full my-1">
          <div class="flex justify-center lg:justify-end items-center">
            <span class="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg></span>
            <input placeholder="1" class="w-10 px-2 py-1 mx-2 border rounded-md border" />
            <span class="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Producto from "../components/Producto.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

import Modal from "../components/Dialog/Modal";
import FilterService from "../components/filterService.vue";

export default {
  data() {
    return {
      isEnabledModal: false,
    };
  },
  components: { Navbar, Footer, Producto, Modal, FilterService },
  methods: {
    closeDialog: function(value) {
      this.isEnabledModal = value;
    },
    openDialog: function() {
      console.log("OPEN");
      this.isEnabledModal = true;
    },
  },
};
</script>

<style>
/* #section-contacto {
    background: url("../assets/imagenes/bg17.jpg");
    background-size: cover;
  }
   */
</style>
