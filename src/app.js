import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Mop the floor",
        priority: "high"},
        {name: "Wash dishes",
        priority: "low"}
      ],
      newToDo: {name: "", priority: ""}
    },
    methods: {
      addNewItem: function() {
        this.items.push(this.newToDo)
        this.newToDo = {name: "", priority: ""}
      }
    }
  })
});
