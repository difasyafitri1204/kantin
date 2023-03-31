function addTransaction(form) {
    console.log(form);
    saleTransaction.inputTransaction(form);
    saleTransaction.showSaleHistory();
}


function countTotalPrice() {
    saleTransaction.totalPrice();
    saleTransaction.changeSum();
}



const databaseTransactionList = {
    save(transactionList) {
        localStorage.setItem('transactionList', JSON.stringify(transactionList));
    },
    get() {
        return JSON.parse(localStorage.getItem('transactionList'));
    }
}

const dbConsumer = {
    save(ListConsumer2) {
        localStorage.setItem('ListConsumer', JSON.stringify(ListConsumer2));
    },
    get() {
        return JSON.parse(localStorage.getItem('ListConsumer'));
    }
}
$('#consumer').on('change', function(){
    const kelas = $('#consumer option:selected').data('class');
    const buy = $('#consumer option:selected').data('buy');
    const price = $('#consumer option:selected').data('price');
    const sum = $('#consumer option:selected').data('sum');
    const total = $('#consumer option:selected').data('total');
    const date = $('#consumer option:selected').data('date');
    
    $('[name=class]').val(kelas);
    $('[name=buy]').val(buy);
    $('[name=sum').val(sum);
    $('[name=price]').val(price);
    $('[name=total]').val(total);
    $('[name=date]').val(date);
  });


const chooseConsumer = {
    showConsumer: function () {
        this.ListConsumer = dbConsumer.get();
        const listOption = document.getElementById('consumer');
        this.ListConsumer.forEach((item) => {
            listOption.innerHTML += `<option data-class="${item.class}" data-buy="${item.buy}" data-price="${item.price}" data-date="${item.date}" data-sum= "${item.sum}" data-total= "${item.total}">${item.names} </option>`
        })
    },
}

const saleTransaction = {
    transaction: {
        index: -1,
        consumer: null,
        date: null,
        class:null,
        buy: null,
        price: null,
        sum: null,
        total: null,
        cash: null,
        change: null
    },
    transactionList: [],
    inputTransaction: function (form) {
        this.transaction.index = form.index.value;
        this.transaction.consumer = form.consumer.value;
        this.transaction.date = form.date.value;
        this.transaction.class = form.class.value;
        this.transaction.buy = form.buy.value;
        this.transaction.price = form.price.value;
        this.transaction.sum = form.sum.value;
        this.transaction.total = form.total.value;
        this.transaction.cash = form.cash.value;
        this.transaction.change = form.change.value;


        if(!this.transaction.consumer) {
            alert('Konsumen tidak boleh kosong!');
            return false;
        }
        if(!this.transaction.price) {
            alert('harga produk tidak boleh kosong!');
            return false;
        }
        if(!this.transaction.sum) {
            alert('Jumlah tidak boleh kosong!');
            return false;
        }
        if(!this.transaction.total) {
            alert('Total harga tidak boleh kosong!');
            return false;
        }
        if(!this.transaction.cash) {
            alert('Tunai tidak boleh kosong!');
            return false;
        }
        if(!this.transaction.change) {
            alert('Kembalian tidak boleh kosong!');
            return false;
        }
        if(this.transaction.index == -1) {
            this.transactionList = this.transactionList || [];
            this.transactionList.push(copy(this.transaction));
        } else {
            this.transactionList[this.transaction.index] = copy(this.transaction)
        }

        databaseTransactionList.save(this.transactionList);
        this.resetFormTransaction(form);
    },
    resetFormTransaction (form) {
        this.transaction.index = -1;
        this.transaction.consumer = null;
        this.transaction.date = null;
        this.transaction.price = null;
        this.transaction.sum = null;
        this.transaction.total = null;
        this.transaction.cash = null;
        this.transaction.change = null;

        form.index.value = this.transaction.index;
        form.consumer.value = this.transaction.consumer;
        form.date.value = this.transaction.date;
        form.class.value = this.transaction.class;
        form.buy.value = this.transaction.buy;
        form.price.value = this.transaction.price;
        form.sum.value = this.transaction.sum;
        form.total.value = this.transaction.total;
        form.cash.value = this.transaction.cash;
        form.change.value = this.transaction.change;
    },
    showSaleHistory: function () {
        this.transactionList = databaseTransactionList.get();
        const componentTransactionList = document.getElementById('transaction-list');
        componentTransactionList.innerHTML = '';
        if (this.transactionList === null) {
            this.transactionList = [];
        } else {
            this.transactionList.forEach((transaction, index) => {
                componentTransactionList.innerHTML += 
                    `<div class="container mx-auto">
                        <div class="flex justify-center gap-5"> 
                            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                                nama: ${transaction.consumer} <br>
                                pesan: ${transaction.buy}<br>
                                kelas: ${transaction.class}<br>
                                harga: ${transaction.price} <br> 
                                Jumlah: ${transaction.sum} <br> 
                                Total Harga: ${transaction.total} <br> 
                                Tunai: ${transaction.cash} <br> 
                                Kembalian: ${transaction.change} <br> 
                                tanggal pemesanan: ${transaction.date}
                                <br>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            </div>
                        </div>
                    </div>`;
            });
        }
    },
    totalPrice: function () {
        var priceValue = document.getElementById('price').value;
        var sumValue = document.getElementById('sum').value;
        var result = parseInt(priceValue) * parseInt(sumValue);
        if (!isNaN(result)) {
           document.getElementById('total').value = result;
        }
    },
    changeSum: function () {
        var cashValue = document.getElementById('cash').value;
        var totalvalue = document.getElementById('total').value;
        var result = parseInt(cashValue) - parseInt(totalvalue);
        if (!isNaN(result)) {
           document.getElementById('change').value = result;
        }
    }
}

function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

saleTransaction.showSaleHistory();
chooseConsumer.showConsumer();
