const app = Vue.createApp({
    data() {
        return{
            showData: true,
            title: "Shereds for Sell",
            description: "Shereds for Sell.............",
            author: 'John Doe',
            age: 34,
            x: 0,
            y: 0,
        }
    },
    methods: {
        addAge(){
            this.age++;
        },
        subAge(){
            this.age--;
        },
        updateTitle(){
            this.title = "Shereds of tenderness";
        },
        toggleData(){
            this.showData = !this.showData;
        },
        handleEvent(e,data){
            console.log(data)
            console.log(e)
        },
        handleMouseMove(e){
            this.x =  e.offsetX,
            this.y = e.offsetY
        }

    },
});

app.mount('#app')