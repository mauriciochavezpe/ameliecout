<template>
  <!-- <div class="container mx-auto">
    {{ isSlot }} -->
    <!-- w-3/5 lg:w-1/5 -->
    <div class="relative ">

      <div class="w-full cursor-pointer" v-on-clickaway="away" @click="isSlot = !isSlot">
        <div
          class="w-full flex justify-between items-center pl-2 pr-4 border border-2 | rounded-md"
          
        >
          <label class="h-8 inline-block flex items-center">
             {{ name }} 
             </label>
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <template
        enter-active-class="transition duration-1000 ease-in-out"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ul
          class="w-full mt-1 border rounded-md absolute z-50 max-h-48 overflow-y-auto ul-scrollbar"
          v-show="isSlot"
        >
          <ListOption
            v-for="(name, i) in listName"
            @changeName="changeName"
            :name="name"
            :key="i"
          />
        </ul>
      </template>
    </div>
  <!-- </div> -->
</template>

<script src="./listBox.js" />
<style src="./index.css" />
