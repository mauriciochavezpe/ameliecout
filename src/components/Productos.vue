<template>
   <div class="mx-auto">
          <div class="w-full h-28 flex justify-center">
               <img class="h-full" :src="p.imagen" alt="" />
               <!-- <img class="h-full" :src="../assets/imagenes/cookies.svg" alt="" /> -->
          </div>
          <div class="my-4">
            <span class="text-3xl">{{p.titulo}}</span>
          </div>
          <div class="mx-4 h-68">
            <p class="p-2 text-sm font-medium lg:text-xl">
              {{p.descripcion}}
            </p>
          </div>
        </div>
</template>

<script>
export default {
    name:'Producto',
    props:["p"]

}
</script>

<style>

</style>