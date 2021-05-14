<template>
  <div
    class="w-full p-2 bg-red-100 | rounded-md cursor-pointer"
    @click="openDialog" 
  >
   
    <div class="w-full">
      <div class="w-full">
        <img
          class="w-full h-40 | rounded-md"
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/Chocolate_cupcakes.jpg"
        />
      </div>
      <div class="w-full">
        <strong>Cupcakes</strong>
        <p class="">
          Lorem1 Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto.
        </p>
        <strong class="cursor-pointer" @click="irMessagewsp"
          ><span class=".price">20.00</span></strong
        >
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Producto",
  data(){
    return {
      isEnabledModal:false
    }
  },

  methods: {
    irMessagewsp: function() {
      window.open("https://www.google.com/");
    },
    openDialog: function() {
      console.log("OPEN");
      // this.isEnabledModal=true;
      this.$emit("openDialog",true)
    }
  },
};
</script>

<style>
price::after {
  content: "";
  background-image: url("../assets/imagenes/whatsapp.svg");
  background-size: 100%;
  position: relative;
  z-index: 1;
  height: 1rem;
  width: 1rem;
}
</style>
