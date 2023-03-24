// const dbAdd = {
//     save(ListAdd2) {
//         localStorage.setItem('ListAdd', JSON.stringify(ListAdd2));
//     },
//     get() {
//         return JSON.parse(localStorage.getItem('ListAdd'));
//     }
// }

// const ListAdd = {
//     Add: {
//         index: -1,
//         names: null,
//         price: null,
//         pictures: null
//     },
//     showListAdd: function() {
//         this.ListAdd = dbAdd.get();
//         const ListProduct = document.getElementById('List-Product');
//             this.ListAdd.forEach((item) => {
//             ListProduct.innerHTML += `
//             <div class="grid grid-flow-col auto-cols-max">
//             <div class="card w-96 bg-base-100 shadow-xl">
//                 <p>
//                 <h2>${item.names}</h2>
//                 <h3>${item.price} </h3>
//                 <img src="${item.pictures}" width= "100px">
//                 </p>
//             </div>
//             </div>`
//         })
//     }
// }

// ListAdd.showListAdd();

