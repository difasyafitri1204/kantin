const dbConsumer = {
    save(ListConsumer2) {
        localStorage.setItem('ListConsumer', JSON.stringify(ListConsumer2));
    },
    get() {
        return JSON.parse(localStorage.getItem('ListConsumer'));
    }
}
 const num = {
    showNum: function () {
        this.ListConsumer = dbConsumer.get();
        let consum = null
            for(consum = 0; consum <= this.ListConsumer.length; consum++) {
                document.getElementById("consumerNum").innerHTML = consum ;
            }
        }
    }
num.showNum();
