import ListOption from "./listOption";
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  name: "ListBox",
  created() {
    console.log("DUMMY");
  },
  components: {
    ListOption,
  },
  data() {
    return {
      isSlot: false,
      name: "",
      listName: [
        {
          img: "https://cdn.icon-icons.com/images/icon-icons.svg",
          nombre: "Chocolate",
        },
        {
          img: "https://cdn.icon-icons.com/images/icon-icons.svg",
          nombre: "Vainilla",
        },
        {
          img: "https://cdn.icon-icons.com/images/icon-icons.svg",
          nombre: "Fruttix",
        },
        {
          img: "https://cdn.icon-icons.com/images/icon-icons.svg",
          nombre: "Clasico",
        },
        {
          img: "https://cdn.icon-icons.com/images/icon-icons.svg",
          nombre: "Caramelizado",
        },
        {
          img: "https://cdn.icon-icons.com/images/icon-icons.svg",
          nombre: "Coco",
        },
        {
          img: "https://cdn.icon-icons.com/images/icon-icons.svg",
          nombre: "Lucuma",
        }
      ],
    };
  },

  methods: {
    changeName: function(e) {
      this.name = e.nombre;
    },
    away: function() {
      this.isSlot = false;
    },
  },
};
