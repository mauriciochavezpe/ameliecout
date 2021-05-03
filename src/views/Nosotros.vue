<template>
  <div class="w-full ">
      <Navbar class="absolute" />
    <!-- <div class=" "> -->
      <!-- <div class="container mx-auto">
        <div class="grid grid-col-2 pt-20">
          <div class="col-start-1 col-end-3 my-6">
            <h2 class="text-6xl">Esta es mi historia</h2>
          </div>
          <div class="w-full">
            <img src="../assets/imagenes/service-04.jpg" alt="" />
          </div>
          <div class="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae
            vel, architecto minus nisi accusamus facere amet ipsam repellat
            veritatis blanditiis magni aliquid in qui voluptatibus assumenda,
            temporibus consectetur iusto?
          </div>
  
      </div>
    </div> -->
      <div class="pt-20 pb-5">
      <Nosotros my-2 v-bind:info="sectionContact"/>
      </div>
      <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Nosotros from "../components/Nosotros.vue";
export default {
  components: {
    Navbar,
    Footer,
    Nosotros
  },
  data(){
      return{
            sectionContact: {
        title: "¿ Quienes somos ?",
        enabled: false,
        pearson: "Emilia Fiorella",
        about1: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque minus voluptate doloribus id amet iste nostrum quis incidunt fuga natus! Unde cum non ipsam quas iure modi in deserunt necessitatibus?`,
        about2: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque minus voluptate doloribus id amet iste nostrum quis incidunt fuga natus! Unde cum non ipsam quas iure modi in deserunt necessitatibus?`,
      },
      }
  }
};
</script>

<style></style>
