    
            function saveProfil(form) {
                console.log(form);
                ListProfil.inputProfil(form);
                ListProfil.showListProfil();
            
            }
            function save() {
                ListProfil.showMultiplication();
                ListProfil.showReduction();
            }
            
            const dbProfil = {
                save(ListProfil2) {
                    localStorage.setItem('ListProfil', JSON.stringify(ListProfil2));
                },
                get () {
                    return JSON.parse(localStorage.getItem('ListProfil'));
                }
            }
            const dbListRegister = {
                save(ListRegister2) {
                    localStorage.setItem('ListRegister', JSON.stringify(ListRegister2));
                },
                get() {
                    return JSON.parse(localStorage.getItem('ListRegister'));
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
            const ListProfil = {
                Profil: {
                    index: -1,
                    name: null,
                    register: null,
                    email: null,
                    password: null,
                    pictures: null,
                    no: null
                },
                ListProfil: [],
                inputProfil: function (form) {
                    this.Profil.index = form.index.value;
                    this.Profil.name = form.name.value;
                    this.Profil.register = form.register.value;
                    this.Profil.email = form.email.value;
                    this.Profil.no = form.no.value;
                    this.Profil.pictures = form.pictures.value;

            
                    if(!this.Profil.register) {
                        alert('register tidak boleh kosong');
                        return false
                    }
                    if(!this.Profil.name) {
                        alert('nama tidak boleh kosong');
                        return false
                    }
                    if(!this.Profil.no) {
                        alert('no tidak boleh kosong');
                        return false
                    }
                    if(!this.Profil.pictures) {
                        alert('link pictures tidak boleh kosong');
                        return false
                    }
                    if(!this.Profil.email) {
                        alert('link email tidak boleh kosong');
                        return false
                    }
                    
                    if(this.Profil.index == -1) {
                        this.ListProfil = this.ListProfil || [];
                        this.ListProfil.push(copy(this.Profil));
                    } else {
                        this.ListProfil[this.Profil.index] = copy(this.Profil)
                    }
                    dbProfil.save(this.ListProfil);
                    this.resetFormProfil(form);
                },
                
                resetFormProfil: function(form) {
                    this.Profil.register =null;
                    this.Profil.name = null,
                    this.Profil.email = null;
                    this.Profil.password = null;
                    this.Profil.pictures = null;
                    this.Profil.no = null;
                    this.Profil.index = -1;
            
                    form.register.value = this.Profil.register;
                    form.name.value = this.Profil.name;
                    form.email.value = this.Profil.email;
                    form.no.value = this.Profil.no;
                    form.pictures.value = this.Profil.pictures;
                    form.password.value = this.Profil.password;
                    form.index.value = this.Profil.index;
            
                    document.getElementById('btn-save-Profil').innerHTML = 'save';
                },
                showListProfil: function () {
                    this.ListProfil = dbProfil.get();
                    const componentListProfil = document.getElementById('List-Profil');
                    
                    componentListProfil.innerHTML = '';
                    if (this.ListProfil === null) {
                        console.log ('gak ada data');
                    } else {
                        this.ListProfil.forEach((Profil, index) => {
                        componentListProfil.innerHTML +=  `<h4><div class="flex justify-center gap-5"> <div class="card-actions justify-end"> ${Profil.name} <br> ${Profil.register} <br>
                            ${Profil.email} <br> ${Profil.password} <br> ${Profil.no}  <br><img src="${Profil.pictures}" width= "100px"></div></div></h4>`;
                        });
                        
                    }
                    
                },
                // showMultiplication: function multiplication() {
                //     var txtFirstNumberValue = document.getElementById('price').value;
                //     var txtSecondNumberValue = document.getElementById('amount').value;
                //     var result = parseInt(txtFirstNumberValue) * parseInt(txtSecondNumberValue);
                //     if (!isNaN(result)) {
                //         document.getElementById('total').value = result;
                //         }
                // },
                // showReduction: function reduction() {
                //     var txtFirstNumberValue = document.getElementById('cash').value;
                //     var txtSecondNumberValue = document.getElementById('total').value;
                //     var result = parseInt(txtFirstNumberValue) - parseInt(txtSecondNumberValue);
                //     if (!isNaN(result)) {
                //         document.getElementById('changes').value = result;
                //         }
                // }
                
            }
    //         const chooseConsumer = {
    //         showListConsumer: function () {
    //         this.dfConsumer = dbConsumer.get();
    
    //         const listOption = document.getElementById('consumer');
    //         if (this.dfConsumer === null){
    //             this.dfConsumer =[];
    //         } else {
    //             this.dfConsumer.forEach((item) => {
    //             listOption.innerHTML += `<option>${item.names}</option>`
    //             })
    //         }
           
    //     }
    
    // }
            const chooseRegister = {

            showListRegister: function () {
            this.ListRegister = dbListRegister.get();
    
            const listOption = document.getElementById('list-option');
                this.ListRegister.forEach((item) => {
                listOption.innerHTML += `<div data-register="${item.register}" data-name=${item.name} 
                data-email=${item.email} data-pictures=${item.pictures}>${item.password}</div>`
            })
            }
    
        }
        $('#name').on('change', function(){
            // ambil data dari elemen option yang dichoose
            const register = $('#list-profil option:selected').data('register');
            const name = $('#List-profil option:selected').data('name');
            const email = $('#list-profil option:selected').data('email');
            const pictures = $('#list-profil option:selected').data('pictures');
            
            
            // tampilkan data ke element
            $('[name=register]').val(register);
            $('[name=name]').val(name);
            $('[name=email]').val(email);
            $('[name=password]').val(password);
            $('[name=pictures]').val(pictures);
            
          });
        
            function copy(obj) {
                return JSON.parse(JSON.stringify(obj));
            }
    
                
            ListProfil.showListProfil();
            chooseRegister.showListRegister();
            // chooseConsumer.showListConsumer();