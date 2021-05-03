<template>
  <div class="w-full">
    <Navbar />
    <div id="section-contacto" class="pt-40">
      <div class="mx-auto container">
        <div
          class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  sm:lg:grid-flow-row "
        >
          <div class="my-4 col-start-1 col-end-5">
            <h2 class="text-4xl sm:lg:text-6xl">Contactanos</h2>
          </div>
          <div class="lg:col-start-1 lg:col-end-3">

          </div>
          <div class="lg:col-start-3 lg:col-end-5 mx-4">
            <div class="mt-6">
              <div class="w-full ">
                <form
                  action="https://api.web3forms.com/submit"
                  class="text-left w-full"
                  method="POST"
                  id="form"
                >
                  <div class="mb-6">
                    <label
                      for="name"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                      >Nombres</label
                    >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      autocomplete="off"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md 
                  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 
                  dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                      >Correo</label
                    >
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="off"
                      placeholder="you@company.com"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="phone"
                      class="text-sm text-gray-600 dark:text-gray-400"
                      >Asunto</label
                    >
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Torta personalizada"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="message"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                      >Mensaje</label
                    >

                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="mensaje descriptivo y detalle"
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 resize-none"
                      required
                    ></textarea>
                  </div>
                  <div class="mb-6">
                    <button
                      type="submit"
                      class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                    >
                      Enviar mensaje
                    </button>
                  </div>
                  <p
                    class="text-base text-center text-gray-400"
                    id="result"
                  ></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// import Contacto from "../components/Contacto.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar, Footer },
};
</script>

<style>
/* #section-contacto {
    background: url("../assets/imagenes/bg17.jpg");
    background-size: cover;
  }
   */
</style>
