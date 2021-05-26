<template>
  <div class="w-full lg:w-72 h-full bg-blue-200 | rounded-md lg:mx-2 mb-2">
    <div class="mt-2">
      <h2 class="font-bold">Fitros</h2>
    </div>
    <form action="" class="text-left p-2">
      <div class="my-2">
        <label class="block mb-1" for="">Nombre</label>
        <input
          autocomplete="off"
          placeholder="eg. brownies, cupcakes, etc."
          class="w-full | rounded-md p-2"
          id="name"
        />
        <!-- <input
                type="range"
                  autocomplete="off"
                  placeholder="eg. brownies, cupcakes, etc."
                  class="w-full | rounded-md p-2"
                  id="name"
                /> -->
      </div>
      <div class="my-2">
        <label class="block mb-1" for="">Categoria</label>
        <select class="w-full p-1 | rounded-md | p-2">
          <option value="value2" selected>Categoria 1</option>
          <option value="value3">Categoria 2</option>
        </select>
      </div>
      {{ val }}
      <div class="my-1">
        <label class="block mb-1" for="">Rango de Precio</label>
        <div class="flex items-center">
          <span class="now-wrap flex price  text-sm" >{{ vStart }}</span>
          <input 
            class="w-full mx-2"
            v-model="val"
            type="range"
            :min="vStart"
            :max="vEnd"
          />
          <span class="now-wrap flex price text-sm">{{ vEnd }}</span>
        </div>
      </div>
      <div class="my-4">
        <button
          class="w-full | flex justify-center | font-bold  | px-2 py-2 | text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
        >
          Buscar
          <div class="ml-1 h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 150,
      vEnd: 240,
      vStart: 30,
    };
  },
};
</script>

<style>


</style>
