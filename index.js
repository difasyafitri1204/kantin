function saveLogin(){ 
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;

    if (user=="admin" && pass=="123"){
        alert("Selamat anda berhasil login")
        window.location.href="home.html";
    }else{
        alert("Username dan password anda salah!");
    }
}