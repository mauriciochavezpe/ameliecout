<template>
  <div>
    <img src="../assets/imagenes/services.svg" alt="" srcset="" />
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

<style></style>
