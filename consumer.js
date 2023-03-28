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
    
    const ListConsumer = {
    Consumer: {
        index: -1,
        names: null,
        class: null,
        date: null,
        buy: null
    },
    ListConsumer: [],
    inputConsumer: function (form) {
        this.Consumer.index = form.index.value;
        this.Consumer.names = form.names.value;
        this.Consumer.class = form.class.value;
        this.Consumer.buy = form.buy.value;
        this.Consumer.date = form.date.value;

        if(!this.Consumer.names) {
            alert('names  tidak boleh kosong');
            return false
        }
        if(!this.Consumer.class) {
            alert('harga  tidak boleh kosong');
            return false
        }
        if(!this.Consumer.buy) {
            alert('gambar  tidak boleh kosong');
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
        this.Consumer.buy =null;
        this.Consumer.date =null;

        form.index.value = this.Consumer.index;
        form.names.value = this.Consumer.names;
        form.class.value = this.Consumer.class;
        form.buy.value = this.Consumer.buy;
        form.date.value = this.Consumer.date;

        document.getElementById('btn-save-Consumer').innerHTML = 'save';
    },

    showListConsumer: function(form) {
            this.ListConsumer = dbConsumer.get();
            const componentListConsumer = document.getElementById('List-Consumer');
            componentListConsumer.innerHTML = '';
            if (this.ListConsumer === null) {
                console.log ('tidak memiliki data');
            } else {
                    this.ListConsumer.forEach((Consumer, index) => {
                    componentListConsumer.innerHTML +=   `<h4><div class="flex justify-center gap-5">
                    <div class="grid grid-flow-col auto-cols-max">${Consumer.names} <br> ${Consumer.class}  <br> ${Consumer.buy} <br> ${Consumer.date}> <button 
                    class="btn btn-accent btn-active" onclick="ListConsumer.editConsumer(${index})">Edit</button><button 
                    class="btn btn-accent btn-active" onclick="ListConsumer.deleteConsumer(${index})"> delete </button></div></div></h4>`;;
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
        form.date.value = Consumer.date;

        document.getElementById('btn-save-Consumer').innerHTML = 'Edit';
    }
    }
    function copy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    
    ListConsumer.showListConsumer();
