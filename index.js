const app = Vue.createApp({
    data() {
        return{
            showData: true,
            books: [
                { title: 'Shreds of Tenderness', author: 'John Kelly', img: 'assets/images/1.jpeg' },
                { title: 'Echoes of the Past', author: 'Jane Doe', img: 'assets/images/2.jpeg' },
                { title: 'The Silent Storm', author: 'Robert Harris', img: 'assets/images/3.jpeg' },
                { title: 'Whispers in the Dark', author: 'Emily Bronte', img: 'assets/images/4.jpeg' },
                { title: 'Fading Shadows', author: 'Michael Scott', img: 'assets/images/5.jpeg' },
                { title: 'Broken Dreams', author: 'Sarah Williams', img: 'assets/images/6.jpeg' },
                { title: 'Journey to Nowhere', author: 'Tom Jenkins', img: 'assets/images/7.jpeg' },
                { title: 'Chasing the Wind', author: 'Alice Walker', img: 'assets/images/8.jpeg' },
                { title: 'Beyond the Horizon', author: 'David Brown', img: 'assets/images/9.jpeg' },
                { title: 'Fragments of Time', author: 'Laura Hill', img: 'assets/images/10.jpeg' }
            ],
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