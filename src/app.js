import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Mop the floor",
        priority: "high",
        checked: false},
        {name: "Wash dishes",
        priority: "low",
        checked: false}
      ],
      newToDo: {name: "", priority: "", checked: false}
    },
    methods: {
      addNewItem: function () {
        this.items.push(this.newToDo)
        this.newToDo = {name: "", priority: "", checked: false}
      },
      checkItem: function (item) {
        let checkedItem = this.items.find(i => i === item)
        checkedItem.checked = true
        
      }
    }
  })
});
