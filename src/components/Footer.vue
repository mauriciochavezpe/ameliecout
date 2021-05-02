<template>
  <div class="bg-footer lg:h-36 py-2">
    <div class="container mx-auto h-full">
      <div class="lg:grid lg:grid-cols-3 h-full flex flex-col-reverse">
        <div class=" flex justify-center items-center ">
          <div  class="my-2 text-white  font-medium lg:font-semibold" >
            <p>© {{ date }} Lima. Todos los derechos reservados</p>
          </div>
        </div>
        <div class=" flex justify-center items-center my-2">
          <div class="mx-2 h-2/5 lg:h-1/4">
            <img class="h-full" src="../assets/imagenes/logo-light.svg" alt="" />
          </div>
        </div>
        <div class=" flex justify-center items-center my-2"> 
             <div  class="text-white font-medium" >
            <p class="text-left">Horario de atención</p>
            <p >Lunes - Sabado   </p>
            <p>9 am - 6 pm   </p>
            <div class="w-full flex justify-end my-2">
                <div class="flex justify-center w-full" >
                    <button class="mx-2">
                        <img class="h-6" src="../assets/imagenes/fb.svg" alt="">
                    </button>
                    <button class="mx-2">
                        <img class="h-6" src="../assets/imagenes/insta.svg" alt="">
                    </button>
                    <button class="mx-2 focus:">
                        <img class="h-6" src="../assets/imagenes/phone.svg" alt="">
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.bg-footer{
  background-color: #30323b;
  /* opacity: .5; */
  /* E7629A */
}
</style>
