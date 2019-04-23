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
    watch: {
        counter: function(value /*vuejs automatically passes*/){
            var vm = this;
            console.log("watch");
            setTimeout(function(){
                vm.counter = 0;
            },2000);
        }
    },
    methods: {
        result: function(){
            //Calling every time
            console.log("method");
            return this.counter > 5 ? "Greater 5" : "Smaller 5";        
        }
    }
})
