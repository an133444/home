function encriptar(){
    let vc = 0;
    let mensaje = document.getElementById("mse").value;
    respuesta = "";
    for(vc = 0; vc < mensaje.length; vc = vc+1){
        respuesta = respuesta + "," + mensaje[vc].charCodeAt(0);
    }
    document.getElementById("se").innerHTML = respuesta;
}
