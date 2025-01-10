let pronombres = ['the','our'];
let adjetivos = ['great','big'];
let sustantivos = ['jogger','racoon'];
let extensiones = ['.com','.net','.us','.io','es'];

function generateDomainNames(){
    for (let i = 0; i < pronombres.length; i++){
        for (let j = 0; j < adjetivos.length; j++){
            for (let k = 0; k < sustantivos.length; k++){
                for ( let l = 0; l < extensiones.length; l++){ 
                    let dominioBasico = pronombres[i]+adjetivos[j]+sustantivos[k];
                    let dominio = dominioBasico + extensiones[l];
                    console.log(dominio);
            }
        }
    }
}
}
generateDomainNames();