<template>
  <div class="">
    <Header />
    <Servicios />
    <Nosotros v-bind:info="sectionContact" />
    <Contacto  />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Nosotros from "../components/Nosotros.vue";
import Servicios from "../components/Servicios.vue";
import Contacto from "../components/Contacto.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Servicios,
    Nosotros,
    Contacto,
    Footer,
  },
  data() {
    return {
      sectionContact: {
        title: "¿ Quienes somos ?",
        enabled: true,
        pearson: "Emilia Fiorella",
        about1: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque minus voluptate doloribus id amet iste nostrum quis incidunt fuga natus! Unde cum non ipsam quas iure modi in deserunt necessitatibus?`,
        about2: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque minus voluptate doloribus id amet iste nostrum quis incidunt fuga natus! Unde cum non ipsam quas iure modi in deserunt necessitatibus?`,
      },
    };
  },
};
</script>

<style></style>
