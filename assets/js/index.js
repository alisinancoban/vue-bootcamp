new Vue({
    el: '#app',
    data: {
        counter: 0,
        sndCounter: 0
    },
    computed: {
        output: function(){
            //calling only propery changed
            console.log("computed");
            return this.counter > 5 ? "Greater 5" : "Smaller 5";
        }
    },
    methods: {
        result(){
            //Calling every time
            console.log("method");
            return this.counter > 5 ? "Greater 5" : "Smaller 5";
            
        }
    }
})
