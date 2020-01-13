import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Wash dishes",
        priority: "low"},
        {name: "Mop the floor",
        priority: "high"}
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
