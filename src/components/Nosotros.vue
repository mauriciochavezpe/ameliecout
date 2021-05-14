<template>
  <div id="section-our" class="w-full ">
    <div class="mx-auto  container">
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row gap-2">
        <div class="lg:col-start-1 lg:col-end-3">
          <h2 class="my-6 text-4xl lg:text-6xl">{{ info.title }}</h2>
        </div>
        <div class="">
          <div class="mt-6">
            <div class="lg:mx-10 mx-4">
              <article class="w-full">
                <h2 class="text-right text-4xl mb-2">
                  {{ info.pearson }}
                </h2>
                <div class="w-full flex justify-end">
                  <hr class="border-1 border-black  w-full" />
                </div>
                <p class="text-sm lg:text-xl text-right mt-4">
                  {{ info.about1 }}
                </p>
                <p class="text-sm lg:text-xl text-right mt-4">
                  {{ info.about2 }}
                </p>
              </article>
            </div>
            <div
              class="flex justify-end px-4 m-4"
              :class="[info.enabled ? '' : 'hidden']"
            >
              <button
                class="lg:mr-2 border-blue-900 px-5 py-2 bg-blue-500 text-white bold-700 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-500"
              >
                Saber más
              </button>
            </div>
          </div>
        </div>
        <div class="">
          <div>
            <img src="../assets/imagenes/service-04.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
};
</script>

<style>
#section-our {
  background-image: url("../assets/imagenes/half-left.png");
  background-attachment: fixed;
  background-size: cover;
}
</style>
