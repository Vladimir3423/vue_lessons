Vue.component ('app-car',{
    data: function(){
        return{
            Cars:[
                {model: 'bmw' },
                {model: 'Audi' },
                {model: 'Ford'},
            
            ]
        }
    },
    template: '<div><div class="car" v-for="car in Cars">   <p>{{car.model}}</p>  </div><div>'
});

new Vue ({
    el: '#app',
    data: {
        title: "2gswaergerwh",
        titleS: '',
        value: 1,
        show: "true",
        cars:[
            {model: 'bmw', speed: 278},
            {model: 'Audi', speed: 278},
            {model: 'Ford', speed: 278},
        
        ],
        
    },
    methods:{
        changText(){
            this.title = 'oleoleole';
        },

        increment(value){
            this.value = value
            if (value == 25)
            alert('Чунга чанга')
        }
    },
    computed:{
        Dvalue(){
            return this.value * 3;
        }
    }
});

new Vue({
    el: '#app2'
})