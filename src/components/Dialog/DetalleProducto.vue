<template>
  <!-- <div class=" absolute -top-18 lg:top-10 z-9000 w-full | flex justify-center items-center "> -->
  <div class="fixed lg:top-1/4 lg:left-1/4  w-full top-20 | left-10 md:left-14">
    <div class=" lg:w-2/3 w-4/5">
      <div
        class="bg-gray-100 | z-5 overflow-y-auto | rounded-md relative | shadow-lg"
      >
        <div class="my-2">
          <h2 class="font-bold">Detalle del Producto</h2>
          <strong class="absolute right-2 top-2 font-sans cursor-pointer focus:border" @click="cerrarDialog">X</strong>
        </div>
        <hr class="mb-2" />
        <div class="grid sm:grid-cols-1 lg:grid-cols-2">
          <div class=" m-2">
            <img
              width="rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/5/56/Chocolate_cupcakes.jpg"
            />
          </div>
          <div class="m-2 text-left ">
            <div class="w-full grid grid-cols-2 gap-2 | my-2">
              <strong class="self-center">Nombre Producto:</strong>
              <strong class="text-left">Tartaleta</strong>
            </div>
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 | my-2">
              <strong class="self-center">Porciones</strong>
              <input
                placeholder="eg. 8, 10, 12"
                class="w-full px-2 py-1 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
              />
            </div>
            <!-- </div> -->

            <!-- <div class="block"> -->
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 | my-2 ">
              <strong class="self-center">Opción de cake:</strong>
              <select
                class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              >
                <option value="chocolate">Chocolate</option>
                <option value="Vainilla">Vainilla</option>
              </select>
            </div>
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 my-2">
              <strong class="self-center">Opción de relleno:</strong>
              <select
                class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              >
                <option value="chocolate">Chocolate</option>
                <option value="Vainilla">Vainilla</option>
              </select>
            </div>
            <div class="w-full grid grid-cols-1 gap-2">
              <strong>Información referencial: </strong>
              <textarea
                rows="2"
                class=" px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 resize-none"
                required
              />
            </div>
   
          </div>
        </div>
        <div class="w-full">
          <div class="flex justify-end p-2">
              <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded | mx-2"
            >
              Guardar
            </button>
            <button
              class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded "
            @click="cerrarDialog"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// props:['showModal'],
export default {
  name: "DetalleProducto",
  data() {
    return { isTrue: true };
  },
  methods:{
    cerrarDialog(){
      console.log("DAsdasd");
      this.$emit("openDialog",false)
    }
  }
};
</script>

<style></style>
