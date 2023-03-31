function saveLogin() {
    IndexLogin.saveLogin();
}

const dbLogin = {
    save(IndexLogin2) {
        localStorage.setItem('IndexLogin', JSON.stringify(IndexLogin2));
    },
    get() {
        return JSON.parse(localStorage.getItem('IndexLogin'));
    }
}
const IndexLogin = {
    Login: {
        index: true
    },
    saveLogin: function (){ 
        var user = document.getElementById("user").value;
        var pass = document.getElementById("password").value;
    
        if (user=="admin" && pass=="23maret"){
            // alert("Selamat anda berhasil login");
            window.location.href="home.html";
        }else{
            alert("Username dan password anda salah!");
        }
        dbLogin.save(this.Login);
    }
}
