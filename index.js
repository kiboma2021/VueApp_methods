const app = Vue.createApp({
    data() {
        return{
            showData: true,
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
        toggleData(){
            this.showData = !this.showData;
        },
    },
});

app.mount('#app')