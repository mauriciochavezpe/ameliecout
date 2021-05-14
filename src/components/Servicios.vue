<template>
  <div id="bg-service">
    <!-- <img src="../assets/imagenes/services.svg" alt="" srcset="" /> -->
    <div class="container mx-auto">
      <div class="mt-10 w-full">
        <h2 class="text-4xl lg:text-6xl">Servicios</h2>
      </div>
      <div class="my-10 lg:mt-10  grid lg:grid-cols-3 grid-cols-1 gap-4">
        <Productos v-for="(p, i) in products" :key="i" v-bind:p="p" />
      </div>
    </div>
    <!-- <img class="" src="../assets/imagenes/botton-section-services.svg" alt="" srcset="" /> -->
  </div>
</template>

<script>
import Productos from "./Productos.vue";
import cooks from "../assets/imagenes/cook.svg";
import cookiees from "../assets/imagenes/cookies.svg";
import cakes from "../assets/imagenes/cakes.svg";
export default {
  components: { Productos },
  data() {
    return {
      products: [
        {
          titulo: "Tortas",
          descripcion: `e mollitia exercitationem adipisci hic maxime
              error quisquam excepturi molestias consectetur pariatur. quia
              perferendis? Voluptate, optio fugiat? Eum assumenda repudiandae
              ullam ut hic rem consequatur unde dicta facere.`,
          imagen: cakes,
        },
        {
          titulo: "Workshop",
          descripcion: `e mollitia exercitationem adipisci hic maxime
              error quisquam excepturi molestias consectetur pariatur. quia
              perferendis? Voluptate, optio fugiat? Eum assumenda repudiandae
              ullam ut hic rem consequatur unde dicta facere.`,
          imagen: cooks,
        },
        {
          titulo: "Bocaditos",
          descripcion: `e mollitia exercitationem adipisci hic maxime
              error quisquam excepturi molestias consectetur pariatur. quia
              perferendis? Voluptate, optio fugiat? Eum assumenda repudiandae
              ullam ut hic rem consequatur unde dicta facere.`,
          imagen: cookiees,
        },
      ],
    };
  },
};
</script>

<style>
#bg-services {
  background-color: #d0b7f6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
