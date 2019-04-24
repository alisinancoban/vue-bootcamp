var app = new Vue({
    el: "#app",
    data: {
        ingredients: ["meat", "fruit", "cookies"],
        persons: [
            {name: "Sinan", age: 23, color: "blue"},
            {name: "Alper", age: 21, color: "red"}
        ],
        input: "yogurt"
    },
    methods: {
        pushToList: function(){
            this.ingredients.push(this.input);
        }
    }
});
