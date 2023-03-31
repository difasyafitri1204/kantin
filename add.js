function saveAdd(form) {
    console.log(form);
    ListAdd.inputAdd(form);
    ListAdd.showListAdd();
    }
    const dbAdd = {
        save(ListAdd2) {
            localStorage.setItem('ListAdd', JSON.stringify(ListAdd2));
        },
        get() {
            return JSON.parse(localStorage.getItem('ListAdd'));
        }
    }
    
    const ListAdd = {
    Add: {
        index: -1,
        names: null,
        price: null,
        pictures: null
    },
    ListAdd: [],
    inputAdd: function (form) {
        this.Add.index = form.index.value;
        this.Add.names = form.names.value;
        this.Add.price = form.price.value;
        this.Add.pictures = form.pictures.value

        if(!this.Add.names) {
            alert('names  tidak boleh kosong');
            return false
        }
        if(!this.Add.price) {
            alert('harga  tidak boleh kosong');
            return false
        }
        if(!this.Add.pictures) {
            alert('gambar  tidak boleh kosong');
            return false
        }
        if(this.Add.index == -1) {
            this.ListAdd = this.ListAdd || [];
            this.ListAdd.push(copy(this.Add));
        } else {
            this.ListAdd[this.Add.index] = copy(this.Add)
        }
        dbAdd.save(this.ListAdd);
        this.resetFormAdd(form);
    },
        resetFormAdd: function(form) {
        this.Add.index = -1;
        this.Add.names =null;
        this.Add.price =null;
        this.Add.pictures =null;

        form.index.value = this.Add.index;
        form.names.value = this.Add.names;
        form.price.value = this.Add.price;
        form.pictures.value = this.Add.pictures;

        document.getElementById('btn-save-Add').innerHTML = 'save';
    },

    showListAdd: function(form) {
            this.ListAdd = dbAdd.get();
            const componentListAdd = document.getElementById('List-Add');
            componentListAdd.innerHTML = '';
            if (this.ListAdd === null) {
                console.log ('tidak memiliki data');
            } else {
                    this.ListAdd.forEach((Add, index) => {
                    componentListAdd.innerHTML +=   `<h4><div class="flex justify-center gap-5">
                    <div class="grid grid-flow-col auto-cols-max">${Add.names} <br> ${Add.price}  <br> <img src="${Add.pictures}" width= "100px"><button 
                    class="btn btn-accent btn-active" onclick="ListAdd.editAdd(${index})">Edit</button><button 
                    class="btn btn-accent btn-active" onclick="ListAdd.deleteAdd(${index})"> delete </button></div></div></h4>`;;
                    });
            }
            
    },
    deleteAdd: function (index) {
        if(confirm('Apakah anda yakin ingin menghapus data ini?')) {
            this.ListAdd.splice(index, 1);
            dbAdd.save(this.ListAdd);
            this.showListAdd();
        }
    },
    editAdd: function (index) {
        const Add = this.ListAdd[index];
        const form = document.getElementById('form-Add');

        form.index.value = index;
        form.names.value = Add.names;
        form.price.value = Add.price;
        form.pictures.value = Add.pictures;

        document.getElementById('btn-save-Add').innerHTML = 'Edit';
    }
    }
    function copy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    
    ListAdd.showListAdd();
