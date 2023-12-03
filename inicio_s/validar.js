var attempt=10;

function validate(){

    var usuar=document.getElementById("usuar").value;
    var password=document.getElementById("password").value;

    if(usuar=="Coro" && password=="2468"){
        
        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'BIENVENIDO'
          })
        
          window.location="https://drive.google.com/drive/folders/1nRfeSO9-rNIltzm3IlifO2Zs5fkMyzOv?usp=sharing";

        return true;
    }
    else{
        
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal',
            text: 'Intenta de nuevo'
          })
    }

}



