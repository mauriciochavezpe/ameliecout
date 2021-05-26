<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!-- eslint-disable -->
  <transition
    enter-active-class="ease-out duration-300"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-in duration-200"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
        <!-- sm:max-w-lg sm:w-full -->
          <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl 
            transform transition-all sm:my-8 sm:align-middle w-full lg:w-3/5 "
          >
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex">
              <!-- <div class=""> -->
              <div class="w-full">
                <h2 class="font-bold text-center">Detalle del Producto</h2>
              </div>

              <!-- </div> -->
            </div>
            <div class="w-full">
              <!-- <div> -->
              <div class="grid lg:grid-cols-2 gap-4 grid-cols-1">
                <div>
                  <div class="mx-2 lg:h-64 h-36">
                    <img
                      class="rounded-lg w-full h-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/56/Chocolate_cupcakes.jpg"
                    />
                  </div>
                </div>
                <div>
                  <div class="mx-2 text-left ">
                    <div class="w-full grid grid-cols-2 gap-2 | my-2">
                      <strong class="self-center">Nombre Producto:</strong>
                      <strong class="text-left">Tartaleta</strong>
                    </div>
                    <div
                      class="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 | my-2"
                    >
                      <strong class="self-center">Porciones</strong>
                      <ListBox />
                       <!-- <select
                        class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                      >
                         <option value="chocolate">10</option>
                        <option value="Vainilla">12</option>
                       </select> -->
                    </div> 
                    <div
                      class="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 | my-2 "
                    >
                      <strong class="self-center">Opción de cake:</strong>
                         <ListBox />
                      <!-- <select
                        class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                      > -->
                      <!-- <select
                        class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                      >
                        <option value="chocolate">Chocolate</option>
                        <option value="Vainilla">Vainilla</option>
                      </select> -->
                       <!-- <ListBox/> -->

                      </div>
                      
                    <div
                      class="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 my-2"
                    >
                      <strong class="self-center">Opción de relleno:</strong>
                       <ListBox />
                    </div>
                    <div class="w-full grid grid-cols-1 gap-2">
                      <strong>Información referencial: </strong>
                      <textarea
                        rows="2"
                        maxlength="200"
                        v-model="inforReferencial"
                        class=" px-2 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 resize-none"
                        required
                      />
                      <div class="flex justify-end">
                          <span class=""> {{countCaract}}/200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div></div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base
                 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto 
                 sm:text-sm "
              @click="cerrarDialog"
              >
                Cancel
                
              </button>
                <!-- class="mt-3 w-full inline-flex justify-center rounded-md border border-blue-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" -->
              <button
                type="button"
                class="w-full inline-flex justify-center | bg-transparent hover:bg-blue-500 text-black-700 hover:text-white py-2 px-4 
                border border-blue-500 hover:border-transparent rounded focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-blue-500
                sm:ml-3 sm:w-auto sm:text-sm mt-2 lg:mt-auto"
                @click="cerrarDialog"
              >
                Guardar
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import ListBox from '../ListBox/listBox.vue';
/* eslint-disable*/
export default {
  components: { ListBox },
  name: "Modal",
  data(){
      return{
          inforReferencial:''
      }
  },
  methods: {
    cerrarDialog() {
      this.$emit("openDialog", false);
    },
  },
  computed:{
      countCaract(){
          return this.inforReferencial.length;
      }
  }
};
</script>

<style></style>
