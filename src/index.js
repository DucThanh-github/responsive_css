// const urls = ['https://img.pokemondb.net/sprites/home/normal/2x/avif/ivysaur.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/ivysaur.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/blastoise.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/blastoise.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/caterpie.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/caterpie.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/metapod.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/metapod.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/butterfree.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/butterfree.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/kakuna.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/kakuna.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/pidgey.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/pidgey.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/pikachu.avif',
//     'https://img.pokemondb.net/sprites/home/normal/2x/avif/pikachu.avif']

// // function suffle(arr) {
// //     for (let i = arr.length - 1; i >= 0; i--) {
// //         console.log(Math.random() * (i - 1))
// //         const j = Math.floor(Math.random() * (i - 1))
// //         [arr[i], arr[j]] = [arr[j], arr[i]]
// //     }
// // }
// function shuffle(array) {
//     let currentIndex = array.length, randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {

//         // Pick a remaining element.
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         // And swap it with the current element.
//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]];
//     }

//     return array;
// }


// const mainElement = document.getElementById('main')
// shuffle(urls).forEach(url => {
//     const createElement = document.createElement('img')
//     createElement.src = url
//     createElement.classList.add('border-black', 'border-2')
//     mainElement.appendChild(createElement)
// })

// function reset() {
//     shuffle(urls).forEach(url => {
//         const createElement = document.createElement('img')
//         createElement.src = url
//         createElement.classList.add('border-black', 'border-2')
//         mainElement.appendChild(createElement)
//     })
// }


////////////////////////////////////////////////////////////////

const app = document.getElementById('vue')
const appVue = Vue.createApp({
    data() {
        return {
            name: 'thanh',
            age: 36,
        }
    }
})
appVue.mount(app)
console.log(app)

