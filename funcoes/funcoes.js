function somar(a, b) {
    return a + b;
}

console.log(somar(5, 23));


function contar(n) {
    if(n > 0){
        contar(n-1);
        console.log(n);
    }
}

contar(5);

const calculadora = {
    somar: function(a, b){
        return a + b;
    },
    subtrair (a, b){
        return a - b;
    }
}

console.log(calculadora.somar(1, 2));


function enviarEmail() {
    console.log("Email: DOWNLOAD FINALIZADO");
}

function enviarSMS() {
    console.log("SMS");
}

function baixarArquivo(nomeDoArquivo, callback) {
    console.log("baixando arquivo " + nomeDoArquivo);
    setTimeout(() => {
        console.log(nomeDoArquivo + "baixado com sucesso");  
        callback();
    }, 5000);
    
}

baixarArquivo("aulaDeJS.mp4", enviarEmail);
baixarArquivo("aulaDeJS.mp4", enviarSMS);