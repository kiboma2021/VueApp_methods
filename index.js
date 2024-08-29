const app = Vue.createApp({
    data() {
        return{
            title: "Shereds for Sell",
            description: "Shereds for Sell.............",
            author: 'John Doe',
            age: 34
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
    },
});

app.mount('#app')