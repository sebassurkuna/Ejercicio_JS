window.addEventListener("DOMContentLoaded", function(e){
    var input = document.getElementById("input");
    input.addEventListener("change", function(event){
        var valor=event.target.value;
        console.log(valor);
    })

    var boton = document.getElementById("button");
    boton.addEventListener("click", function(event){
        var valor = document.getElementById("input").value;
        var content_container = document.getElementById("content-container");
        alert(valor);
        if (isNaN(valor)==false) {
            for (let index = 1; index < valor; index++) {
                document.body.innerHTML = document.body.innerHTML + "<div id='content-container' class='content-container'>" + content_container.innerHTML+"</div>";
            }
        }
    })

   /**  boton.addEventListener("click", function(event){
        var content_container = document.getElementById("content-container");
        for (let index = 1; index < 4; index++) {
            document.body.innerHTML = document.body.innerHTML + "<div id='content-container' class='content-container'>" + content_container.innerHTML+"</div>";
        }
        
    })*/
    
})