    
            function saveBuying(form) {
                console.log(form);
                ListBuying.inputBuying(form);
                ListBuying.showListBuying();
            
            }
            function save() {
                ListBuying.showMultiplication();
                ListBuying.showReduction();
            }
            
            const dbBuying = {
                save(ListBuying2) {
                    localStorage.setItem('ListBuying', JSON.stringify(ListBuying2));
                },
                get () {
                    return JSON.parse(localStorage.getItem('ListBuying'));
                }
            }
            const dbListProduct = {
                save(ListProduct2) {
                    localStorage.setItem('ListProduct', JSON.stringify(ListProduct2));
                },
                get() {
                    return JSON.parse(localStorage.getItem('ListProduct'));
                }
            }
            const dbConsumer = {
                save(dfConsumer2) {
                    localStorage.setItem('dfConsumer', JSON.stringify(dfConsumer2));
                },
                get () {
                    return JSON.parse(localStorage.getItem('dfConsumer'));
                }
            }
            const ListBuying = {
                Buying: {
                    index: -1,
                    consumer: null,
                    product: null,
                    price: null,
                    stock: null,
                    pictures: null,
                    amount: null,
                    total: null,
                    cash: null,
                    changes: null
                },
                ListBuying: [],
                inputBuying: function (form) {
                    this.Buying.index = form.index.value;
                    this.Buying.consumer = form.consumer.value;
                    this.Buying.product = form.product.value;
                    this.Buying.price = form.price.value;
                    this.Buying.stock = form.stock.value;
                    this.Buying.pictures = form.pictures.value;
                    this.Buying.amount = form.amount.value;
                    this.Buying.total = form.total.value;
                    this.Buying.cash = form.cash.value;
                    this.Buying.changes = form.changes.value;
            
                    if(!this.Buying.product) {
                        alert('Product tidak boleh kosong');
                        return false
                    }
                    if(!this.Buying.price) {
                        alert('price tidak boleh kosong');
                        return false
                    }
                    if(!this.Buying.stock) {
                        alert('stock tidak boleh kosong');
                        return false
                    }
                    if(!this.Buying.pictures) {
                        alert('link pictures tidak boleh kosong');
                        return false
                    }
                    if(!this.Buying.amount) {
                        alert('link amount tidak boleh kosong');
                        return false
                    }
                    if(!this.Buying.total) {
                        alert('link total tidak boleh kosong');
                        return false
                    }
                    if(!this.Buying.cash) {
                        alert('link cash tidak boleh kosong');
                        return false
                    }
                    if(!this.Buying.changes) {
                        alert('link changes tidak boleh kosong');
                        return false
                    }
                    
                    if(this.Buying.index == -1) {
                        this.ListBuying = this.ListBuying || [];
                        this.ListBuying.push(copy(this.Buying));
                    } else {
                        this.ListBuying[this.Buying.index] = copy(this.Buying)
                    }
                    dbBuying.save(this.ListBuying);
                    this.resetFormBuying(form);
                },
                
                resetFormBuying: function(form) {
                    this.Buying.product =null;
                    this.Buying.consumer = null,
                    this.Buying.price = null;
                    this.Buying.stock = null;
                    this.Buying.pictures = null;
                    this.Buying.amount = null;
                    this.Buying.total = null;
                    this.Buying.cash = null;
                    this.Buying.changes = null;
                    this.Buying.index = -1;
            
                    form.product.value = this.Buying.product;
                    form.consumer.value = this.Buying.consumer;
                    form.price.value = this.Buying.price;
                    form.stock.value = this.Buying.stock;
                    form.pictures.value = this.Buying.pictures;
                    form.amount.value = this.Buying.amount;
                    form.total.value = this.Buying.total;
                    form.cash.value = this.Buying.cash;
                    form.changes.value = this.Buying.changes;
                    form.index.value = this.Buying.index;
            
                    document.getElementById('btn-save-Buying').innerHTML = 'save';
                },
                showListBuying: function () {
                    this.ListBuying = dbBuying.get();
                    const componentListBuying = document.getElementById('List-Buying');
                    
                    componentListBuying.innerHTML = '';
                    if (this.ListBuying === null) {
                        console.log ('gak ada data');
                    } else {
                        this.ListBuying.forEach((Buying, index) => {
                        componentListBuying.innerHTML +=  `<h4><div class="flex justify-center gap-5"> <div class="card-actions justify-end"> ${Buying.consumer} <br> ${Buying.product} <br>
                            price: ${Buying.price} <br> stock: ${Buying.stock} <br> amount: ${Buying.amount}  <br> Total: ${Buying.total} <br> cash: 
                            ${Buying.cash} <br> changes: ${Buying.changes}  <img src="${Buying.pictures}" width= "100px"></div></div></h4>`;
                        });
                        
                    }
                    
                },
                showMultiplication: function multiplication() {
                    var txtFirstNumberValue = document.getElementById('price').value;
                    var txtSecondNumberValue = document.getElementById('amount').value;
                    var result = parseInt(txtFirstNumberValue) * parseInt(txtSecondNumberValue);
                    if (!isNaN(result)) {
                        document.getElementById('total').value = result;
                        }
                },
                showReduction: function reduction() {
                    var txtFirstNumberValue = document.getElementById('cash').value;
                    var txtSecondNumberValue = document.getElementById('total').value;
                    var result = parseInt(txtFirstNumberValue) - parseInt(txtSecondNumberValue);
                    if (!isNaN(result)) {
                        document.getElementById('changes').value = result;
                        }
                }
                
            }
            const chooseConsumer = {
            showListConsumer: function () {
            this.dfConsumer = dbConsumer.get();
    
            const listOption = document.getElementById('consumer');
            if (this.dfConsumer === null){
                this.dfConsumer =[];
            } else {
                this.dfConsumer.forEach((item) => {
                listOption.innerHTML += `<option>${item.names}</option>`
                })
            }
           
        }
    
    }
            const chooseProduct = {

            showListProduct: function () {
            this.ListProduct = dbListProduct.get();
    
            const listOption = document.getElementById('list-option');
                this.ListProduct.forEach((item) => {
                listOption.innerHTML += `<option data-product="${item.product}" data-price=${item.price} 
                data-stock=${item.stock} data-pictures=${item.picture}>${item.product}</option>`
            })
            }
    
        }
        $('#list-option').on('change', function(){
            // ambil data dari elemen option yang dichoose
            const product = $('#list-option option:selected').data('product');
            const price = $('#list-option option:selected').data('price');
            const stock = $('#list-option option:selected').data('stock');
            const picture = $('#list-option option:selected').data('pictures');
            
            
            // tampilkan data ke element
            $('[name=product]').val(product);
            $('[name=price]').val(price);
            $('[name=stock]').val(stock);
            $('[name=pictures]').val(picture);
            
          });
        
            function copy(obj) {
                return JSON.parse(JSON.stringify(obj));
            }
    
                
            ListBuying.showListBuying();
            chooseProduct.showListProduct();
            chooseConsumer.showListConsumer();