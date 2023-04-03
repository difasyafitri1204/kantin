function saveConsumer(form) {
    console.log(form);
    ListConsumer.inputConsumer(form);
    ListConsumer.showListConsumer();
    }
    const dbConsumer = {
        save(ListConsumer2) {
            localStorage.setItem('ListConsumer', JSON.stringify(ListConsumer2));
        },
        get() {
            return JSON.parse(localStorage.getItem('ListConsumer'));
        }
    }
function countTotalPrice() {
    ListConsumer.totalPrice();
}   
const dbAdd = {
    save(ListAdd2) {
        localStorage.setItem('ListAdd', JSON.stringify(ListAdd2));
    },
    get() {
        return JSON.parse(localStorage.getItem('ListAdd'));
    }
}
$('#buy').on('change', function(){
    const prices = $('#buy option:selected').data('price');
    
    $('[name=price]').val(prices);
});

const chooseMenu = {
    showMenu: function () {
        this.ListAdd = dbAdd.get();
        const listOption = document.getElementById('buy');
        this.ListAdd.forEach((item) => {
            listOption.innerHTML += `<option data-price="${item.price}"> ${item.names}</option>`
        })
    },
}
    const ListConsumer = {
    Consumer: {
        index: -1,
        names: null,
        class: null,
        buy: null,
        price: null,
        sum: null,
        total: null,
        date: null
    },
    ListConsumer: [],
    inputConsumer: function (form) {
        this.Consumer.index = form.index.value;
        this.Consumer.names = form.names.value;
        this.Consumer.class = form.class.value;
        this.Consumer.buy = form.buy.value;
        this.Consumer.price = form.price.value;
        this.Consumer.sum = form.sum.value;
        this.Consumer.total = form.total.value;
        this.Consumer.date = form.date.value;

        if(!this.Consumer.names) {
            alert('names  tidak boleh kosong');
            return false
        }
        if(!this.Consumer.class) {
            alert('kelas  tidak boleh kosong');
            return false
        }
        if(!this.Consumer.buy) {
            alert('pesan tidak boleh kosong');
            return false
        }
        if(!this.Consumer.sum) {
            alert('tidak boleh kosong');
            return false
        }
        if(!this.Consumer.date) {
            alert('tanggal tidak boleh kosong');
            return false
        }
        if(this.Consumer.index == -1) {
            this.ListConsumer = this.ListConsumer || [];
            this.ListConsumer.push(copy(this.Consumer));
        } else {
            this.ListConsumer[this.Consumer.index] = copy(this.Consumer)
        }
        dbConsumer.save(this.ListConsumer);
        this.resetFormConsumer(form);
    },
        resetFormConsumer: function(form) {
        this.Consumer.index = -1;
        this.Consumer.names =null;
        this.Consumer.class =null;
        this.Consumer.price = null;
        this.Consumer.buy =null;
        this.Consumer.sum = null;
        this.Consumer.total = null;
        this.Consumer.date =null;

        form.index.value = this.Consumer.index;
        form.names.value = this.Consumer.names;
        form.class.value = this.Consumer.class;
        form.buy.value = this.Consumer.buy;
        form.price.value = this.Consumer.price;
        form.sum.value = this.Consumer.sum;
        form.total.value = this.Consumer.total;
        form.date.value = this.Consumer.date;

        document.getElementById('btn-save-Consumer').innerHTML = 'save';
    },

    showListConsumer: function() {
            this.ListConsumer = dbConsumer.get();
            const componentListConsumer = document.getElementById('List-Consumer');
            componentListConsumer.innerHTML ='';
            if (this.ListConsumer === null) {
                console.log ('tidak memiliki data');
            } else {
                    this.ListConsumer.forEach((Consumer, index) => {
                    componentListConsumer.innerHTML +=   
                    `<h4>
                            <div class="flex justify-center gap-5">
                                <div class="grid grid-flow-col auto-cols-max">
                                    Nama :${Consumer.names}
                                    <br> Kelas : ${Consumer.class} 
                                    <br> Pesan : ${Consumer.buy} 
                                    <br> Harga : ${Consumer.price} 
                                    <br> Jumlah : ${Consumer.sum}
                                    <br> Total : ${Consumer.total} 
                                    <br> Tanggal : ${Consumer.date} 
                                    <button class="btn btn-accent btn-active" 
                                    onclick="ListConsumer.editConsumer(${index})">Edit
                                    </button>
                                    <button class="btn btn-accent btn-active" 
                                    onclick="ListConsumer.deleteConsumer(${index})"> Delete 
                                    </button>
                                </div>
                            </div>
                        <br>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    </h4>`;
                    });
            }
            
    },
    deleteConsumer: function (index) {
        if(confirm('Apakah anda yakin ingin menghapus data ini?')) {
            this.ListConsumer.splice(index, 1);
            dbConsumer.save(this.ListConsumer);
            this.showListConsumer();
        }
    },
    editConsumer: function (index) {
        const Consumer = this.ListConsumer[index];
        const form = document.getElementById('form-Consumer');

        form.index.value = index;
        form.names.value = Consumer.names;
        form.class.value = Consumer.class;
        form.buy.value = Consumer.buy;
        form.price.value = Consumer.price;
        form.sum.value = Consumer.sum;
        form.total.value = Consumer.total;
        form.date.value = Consumer.date;

        document.getElementById('btn-save-Consumer').innerHTML = 'Edit';
    },
    totalPrice: function () {
        var priceValue = document.getElementById('price').value;
        var sumValue = document.getElementById('sum').value;
        var result = parseInt(priceValue) * parseInt(sumValue);
        if (!isNaN(result)) {
           document.getElementById('total').value = result;
        }
    }
    }
    function copy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    
    ListConsumer.showListConsumer();
    chooseMenu.showMenu();

