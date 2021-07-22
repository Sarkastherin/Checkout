function plus(){
    (document.getElementById("cantidad_1").value)++
}
function rest(){
    if(document.getElementById("cantidad_1").value < 1){
        document.getElementById("cantidad_1").value=0
    }
    else{
        (document.getElementById("cantidad_1").value)--
    }
}
