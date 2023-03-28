const dbLogin = {
    save(IndexLogin2) {
        localStorage.setItem('IndexLogin', JSON.stringify(IndexLogin2));
    },
    get() {
        return JSON.parse(localStorage.getItem('IndexLogin'));
    }
}
function logout(){
    IndexLogout.logout();
}
const IndexLogout = {
    begin: function(){
        this.Login = dbLogin.get();
        if(!this.Login) {
            window.location.href="index.html";  
        }
    },
    logout: function() {
        localStorage.removeItem('IndexLogin');
    }
}
IndexLogout.begin()