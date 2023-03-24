// const dbAdd = {
//     save(ListAdd2) {
//         localStorage.setItem('ListAdd', JSON.stringify(ListAdd2));
//     },
//     get() {
//         return JSON.parse(localStorage.getItem('ListAdd'));
//     }
// }

// const ListHome = {
//     showListHome: function() {
//         this.ListAdd = dbAdd.get();
//         const ListHome = document.getElementById('list-home');
//             this.ListAdd.forEach((item) => {
//             ListHome.innerHTML += `
//             <div class="carousel-item w-1/2">
//                 <img src="${item.pictures}" class="w-full">
//             </div>`
//         })
//     }
// }

// ListHome.showListHome();
function logout {
    IndexLogout.logout();
}
const IndexLogout = {
    logout: function() {
        localStorage.removeItem("indexLogin");
    }
}
// function copy(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }

// ListAdd.showListAdd();