<template>
  <div class="w-full">
    <div id="navbar" class="fixed w-full transform duration-500 ease-in-out">
      <div class=" container mx-auto">
        <div class="h-full w-full">
          <div class="flex justify-between item-center">
            <div class="lg:flex w-40 justify-start">
              <span class="sr-only">Amélíe Cout</span>
              <div class=" lg:w-full">
                <img
                  class="m-5"
                  src="../assets/imagenes/logo.svg"
                  alt="logo emilie cout 2021"
                  srcset=""
                />
                <!-- </button> -->
              </div>
            </div>
            <div class="hidden lg:flex ">
              <div class="flex justify-end">
                <div class="flex items-center">
                  <!-- <a href="#" class="text-xl mx-5">INICIO</a> -->
                  <!-- <a href="#" class="text-xl mx-5">SERVICIOS</a> -->
                  <!-- <a href="#" class="text-xl mx-5">NOSOTROS</a> -->
                  <!-- <a href="#" class="text-xl mx-5">CONTACTO</a> -->
                  <router-link class="text-xl mx-5" to="/">INICIO</router-link>
                  <router-link class="text-xl mx-5" to="/servicios"
                    >SERVICIOS</router-link
                  >
                  <router-link class="text-xl mx-5" to="/nosotros"
                    >NOSOTROS</router-link
                  >
                  <router-link class="text-xl mx-5" to="/contacto"
                    >CONTACTO</router-link
                  >
                </div>
              </div>
            </div>
            <!-- menu responsive -->
            <div class="lg:hidden">
              <div class=" fixed right-2 mt-2 z-50">
                <button
                  v-on:click="burgertoggle"
                  id="buttonToggle"
                  class="focus:outline-none menu menu--slide"
                  type="button"
                >
                  <span class="menu__inner"></span>
                </button>
              
              </div>
            </div>
            <!-- menu desktop -->
            <div class=" lg:hidden">
              <div
                id="menu"
                class="fixed z-20 h-screen transform translate-x-full 
      duration-500 ease-in-out w-screen h-screen bg-blue-200"
              >
                <div
                  class="w-full h-full flex flex-col justify-center align-center uppercase font-medium"
                >
                  <!-- <a href="#" class="text-3xl m-5"> -->
                  <!-- <router-link to="/">CONCTACTO</router-link> -->
                  <!-- </a> -->
                   <router-link  class="text-3xl m-5" to="/">INICIO</router-link>
                    <router-link class="text-3xl m-5"  to="/servicios">SERVICIOS</router-link>
                    <router-link class="text-3xl m-5"  to="/nosotros">NOSOTROS</router-link>
                  <!-- <a href="#" >SERVICIOS</a>
                  <a href="#" >NOSOTROS</a>
                  <a href="#" >CONTACTOS</a> -->
                </div>
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
  name: "Navbar",
  data() {
    return {
      scroller: true,
    };
  },
  methods: {
    menuResponsive: function() {
      if (
        document.getElementById("menu").classList.contains("-translate-x-full")
      ) {
        document.getElementById("menu").classList.remove("-translate-x-full");
        document.getElementById("menu").classList.remove("translate-x-full");
        document.getElementsByTagName("body")[0].style.overflow="";
      } else {
        document.getElementById("menu").classList.remove("translate-x-full");
        document.getElementById("menu").classList.add("-translate-x-full");
        document.getElementsByTagName("body")[0].style.overflow="hidden"
      }
    },
    burgertoggle: function() {
      const menuButtons = document.getElementById("buttonToggle");
      if (menuButtons) {
        menuButtons.classList.toggle("menu--active");
        this.menuResponsive();
      }
    },
    redit: () => {
      
    },
  },
  created: function() {
    window.onscroll = function() {
      let navbar = document.getElementById("navbar");
      let positionScroll = window.scrollY;
      // debugger;
      if (positionScroll > 50) {
        navbar.classList.add("bg-gray-300");
      } else {
        navbar.classList.remove("bg-gray-300");
      }
    };
  },
};
</script>

<style>
.overflow-hidden {
  overflow: hidden;
}
.overflow-show {
  overflow: scroll;
}
/* BOTTON BURGER */
.menu {
  width: 4rem;
  height: 3.5rem;
  background: none;
  border: none;
  padding: 0;

  text-indent: 5rem;
  overflow: hidden;
  position: relative;
}

.menu:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
}

.menu__inner,
.menu__inner:before,
.menu__inner:after {
  position: absolute;
  height: 0.25rem;
  background-color: #e579a6;
  border-radius: 0.25rem;
  display: block;
}

.menu__inner {
  width: 70%;
  left: 15%;
  top: 50%;
  transform: translateY(-50%);
}

.menu__inner:before,
.menu__inner:after {
  content: "";
  left: 0;
  width: 100%;
}

.menu__inner:before {
  top: -0.75rem;
}

.menu__inner:after {
  top: 0.75rem;
}

/* Slide */
.menu--slide .menu__inner,
.menu--slide .menu__inner:before,
.menu--slide .menu__inner:after {
  transition: transform, top, left, 0.16s ease-in-out;
}

.menu--slide.menu--active .menu__inner {
  transform: translateX(-4rem);
}

.menu--slide.menu--active .menu__inner:before {
  transform: translateX(2rem) rotate(45deg);
  left: 2rem;
  top: 0;
}

.menu--slide.menu--active .menu__inner:after {
  transform: translateX(2rem) rotate(-45deg);
  left: 2rem;
  top: 0;
}
</style>
