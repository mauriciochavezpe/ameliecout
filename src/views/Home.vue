<template>
  <div class="">
    <Header/>
    <Servicios/>
    <Nosotros/>
    <Conctacto/>
    <Footer/>
  </div>
  
</template>

<script>
import Header from '../components/Header.vue'
import Nosotros from '../components/Nosotros.vue'
import Servicios from '../components/Servicios.vue'
import Conctacto from '../components/Contacto.vue'
import Footer from '../components/Footer.vue'

export default {
components:{
  Header,
  Servicios,
  Nosotros,
  Conctacto,
  Footer
}
}
</script>

<style>

</style>