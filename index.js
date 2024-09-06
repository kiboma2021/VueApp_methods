const app = Vue.createApp({
    data() {
        return{
            showData: true,
            books: [
                { title: 'Shreds of Tenderness', author: 'John Kelly', img: 'assets/images/1.jpeg', isFav: true },
                { title: 'Echoes of the Past', author: 'Jane Doe', img: 'assets/images/2.jpeg', isFav: false },
                { title: 'The Silent Storm', author: 'Robert Harris', img: 'assets/images/3.jpeg', isFav: true },
                { title: 'Whispers in the Dark', author: 'Emily Bronte', img: 'assets/images/4.jpeg', isFav: false },
                { title: 'Fading Shadows', author: 'Michael Scott', img: 'assets/images/5.jpeg', isFav: false },
                { title: 'Broken Dreams', author: 'Sarah Williams', img: 'assets/images/6.jpeg', isFav: false },
                { title: 'Journey to Nowhere', author: 'Tom Jenkins', img: 'assets/images/7.jpeg', isFav: true },
                { title: 'Chasing the Wind', author: 'Alice Walker', img: 'assets/images/8.jpeg', isFav: true },
                { title: 'Beyond the Horizon', author: 'David Brown', img: 'assets/images/9.jpeg', isFav: false },
                { title: 'Fragments of Time', author: 'Laura Hill', img: 'assets/images/10.jpeg', isFav: true }
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
        },
        toogleFav(book){
            book.isFav = !book.isFav
        }

    },
    computed: {
        filteredBooks(){
            return this.books.filter(book => book.isFav)
        }
    }
});

app.mount('#app')