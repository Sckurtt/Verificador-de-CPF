var cpfInvalido = [
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
];
function verify(cpf){
    // let control = '';
    var parteUm =(cpf)=>{
        let total = 0;
        let status = '';
        let x = 11;
        let digitoUm = parseInt(cpf[9]);
        for(i = 0; i <= 8; i++){
            x--
            total += (cpf[i] * x);
        };
        let parteUm = (total * 10) % 11;
        if(parteUm == digitoUm){
            status = true;
        }
        return status;
    }
    var parteDois =(cpf)=>{
        let total = 0;
        let status = '';
        let x = 12;
        let digitoDois = parseInt(cpf[10]);
        for(i = 0; i <= 9; i++){
            x--
            total += cpf[i] * x;
        }
        let rdois = (total * 10) % 11;
        if(rdois == digitoDois){
            status = true;
        }
        return status;
    }
    for(i = 0; i < 9; i++){
        if(cpf == cpfInvalido[i]){
            console.log('invalido');
        }else if(cpf != cpfInvalido[i]){
            if(parteUm(cpf) == true && parteDois(cpf) == true){
                return true;
            }else{
                return false;
            }
        }
    }
}
module.exports = verify;