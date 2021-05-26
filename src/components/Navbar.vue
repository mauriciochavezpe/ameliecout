<template>
  <div class="w-full" >
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
                   <!-- menu desktop -->
            <div class="hidden lg:flex ">
              <div class="flex justify-end">
                <div class="flex items-center">
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
                  @click="burgertoggle(!isToggle)"
                  id="buttonToggle"
                  class="focus:outline-none menu menu--slide"
                  type="button"
                   :class="[isToggle ? 'menu--active' : '']"
                >
                  <span class="menu__inner"></span>
                </button>
              </div>
            </div>
         
            <div class=" lg:hidden">
              <div
                id="menu"
                class="fixed z-20 h-screen transform 
      duration-500 ease-in-out w-screen h-screen bg-blue-200"
                :class="[isToggle ? '-translate-x-full' : 'translate-x-full']"
              >
                <div
                  class="w-full h-full flex flex-col justify-center text-start items-center  uppercase font-medium"
                >
                  <router-link class="text-3xl m-5" to="/">INICIO</router-link>
                  <router-link class="text-3xl m-5" to="/servicios"
                    >SERVICIOS</router-link
                  >
                  <router-link class="text-3xl m-5" to="/nosotros"
                    >NOSOTROS</router-link
                  >
                    <router-link class="text-3xl m-5" to="/contacto"
                    >CONTACTO</router-link
                  >
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
      isToggle: false,
    };
  },
  methods: {
    menuResponsive: function() {
      let menu = document.getElementById("menu");
      if (menu.classList.contains("-translate-x-full")) {
        menu.classList.remove("-translate-x-full");
        menu.classList.remove("translate-x-full");
        document.getElementsByTagName("body")[0].style.overflow = "";
      } else {
        menu.classList.remove("translate-x-full");
        menu.classList.add("-translate-x-full");
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
      }
    },
    burgertoggle: function(data) {
      this.isToggle = data;
    },
  },
  created: function() {
    window.onscroll = function() {
      let navbar = document.getElementById("navbar");
      let positionScroll = window.scrollY;
      if (positionScroll > 50) {
        navbar.classList.add("bg-white");
        navbar.classList.add("shadow-lg");
      } else {
        navbar.classList.remove("bg-white");
        navbar.classList.remove("shadow-lg");
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
