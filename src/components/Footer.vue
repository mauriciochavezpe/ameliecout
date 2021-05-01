<template>
  <div class="bg-red-200 lg:h-36">
    <div class="container mx-auto h-full">
      <div class="grid lg:grid-cols-3 h-full ">
        <div class=" flex justify-center items-center ">
          <div  class="my-2" >
            <p>© {{ date }} Lima. Todos los derechos reservados</p>
          </div>
        </div>
        <div class=" flex justify-center items-center">
          <div class="mx-2 h-2/5 lg:h-1/4">
            <img class="h-full" src="../assets/imagenes/logo.svg" alt="" />
          </div>
        </div>
        <div class=" flex justify-center items-center"> 
             <div  class="" >
            <p class="text-left">Horario de atención</p>
            <p >Lunes - Sabado   </p>
            <p>9 am - 6 pm   </p>
            <div class="w-full flex justify-end my-2">
                <div class="flex justify-center w-full" >
                    <button class="mx-2">
                        <img class="h-6" src="../assets/imagenes/fb.svg" alt="">
                    </button>
                    <button class="mx-2">
                        <img class="h-6" src="../assets/imagenes/instagram.svg" alt="">
                    </button>
                    <button class="mx-2 focus:">
                        <img class="h-6" src="../assets/imagenes/phone-call.svg" alt="">
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

<style></style>
