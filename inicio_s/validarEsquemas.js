var attempt=10;

function validateEsquema(){

    var usuar=document.getElementById("usuar").value;
    var password=document.getElementById("password").value;

    if(usuar=="JosueC" && password=="20290237"){
        
        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'JosueC'
          })
        
      window.location="../P_secun/esquemas.html";

        return true;
    
    }if(usuar=="MiguelR" && password=="20290238"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'MiguelR'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    }
    if(usuar=="LupillaH" && password=="20290239"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'LupillaH'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    
    }if(usuar=="LupitaR" && password=="20290230"){
         
        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'LupitaR'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    }
    if(usuar=="YoselinR" && password=="20290241"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'YoselinR'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    
    }if(usuar=="DannaG" && password=="20290242"){ 

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'DannaG'
          })
        
          window.location="../P_secun/esquemas.html";

        return true;
    }
    if(usuar=="MarianaR" && password=="20290243"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'MarianaR'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    
    }if(usuar=="VeroP" && password=="20290244"){  

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'VeroP'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    }
    if(usuar=="MagdaR" && password=="20290245"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'MagdaR'
          })
        
          window.location="../P_secun/esquemas.html";

        return true;
    
    }if(usuar=="JuanaR" && password=="20290246"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'JuanaR'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    }
    if(usuar=="PakoR" && password=="20290247"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'PakoR'
          })
        
          window.location="../P_secun/esquemas.html";

        return true;
    
    }if(usuar=="RosyG" && password=="20290248"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'RosyG'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    }
    if(usuar=="ElsiV" && password=="20290249"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'ElsiV'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    }
    if(usuar=="PerlaM" && password=="20290250"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'PerlaM'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    }
    if(usuar=="MiguelS" && password=="20290251"){

        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'MiguelS'
          })
          window.location="../P_secun/esquemas.html";

        return true;
    }
    if(usuar=="Invitado" && password=="12345678"){
      
        Swal.fire({
            icon: 'success',
            title: 'USUARIO CORRECTO',
            text: 'BIENVENIDO USUARIO INVITADO'
          })
          window.location="../P_secun/EsqueInvitado.html";

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
