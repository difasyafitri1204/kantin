const dbAdd = {
    save(ListAdd2) {
        localStorage.setItem('ListAdd', JSON.stringify(ListAdd2));
    },
    get() {
        return JSON.parse(localStorage.getItem('ListAdd'));
    }
}

const ListAdd = {
    showListAdd: function() {
        this.ListAdd = dbAdd.get();
        const listOption = document.getElementById('products');
            this.ListAdd.forEach((item) => {
            listOption.innerHTML += `
            <div class="container mx-auto">
                <div class="flex justify-center gap-5"> 
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        ${item.names}<br>
                        <img src="${item.pictures}" width= "200px" height="200px" ><br> 
                        Rp.${item.price}<br> 
                        ------------------------------------------------------<br>
                    </div>
                </div>
            </div>`
        })
    }
}

ListAdd.showListAdd();
