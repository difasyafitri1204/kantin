const consumer = {
    showListConsumer: function() {
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
        
    }
}
