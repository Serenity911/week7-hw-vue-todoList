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
      // to keep the control here on what is inserted in the form.
      validateForm: function () {
        const status = {
          code: "Success",
          error: []
        }
        if (!this.newToDo.name) {
          status.code = "ERROR"
          status.error.push("Requires a name")
        }
        if (!this.newToDo.priority){
          status.code = "ERROR"
          status.error.push("Requires a priority")
        }
        return status;
      },

      addNewItem: function () {
        const status = this.validateForm();
        if (status.code !== "Success") {
          alert(status.error.join('\n'));
          return;
        }
        this.items.push(this.newToDo)
        this.newToDo = {name: "", priority: "", checked: false}
      },
      checkItem: function (item) {
        let checkedItem = this.items.find(i => i === item)
        checkedItem.checked = true
      },
      deleteItem: function (item) {
        // let deleteItem = this.items.find(i => i === item)
        this.items.splice(this.items.indexOf(item), 1)
      }
    }
  })
});
