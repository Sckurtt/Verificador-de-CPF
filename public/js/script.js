const buttonSubmit = document.querySelector('.search-button');

function responseHTML(respostaAPI){

    let result = document.querySelector('.result');
    let spanValidate = document.querySelector('.validate');

    if(respostaAPI.valid == true){
        spanValidate.textContent = "Verdadeiro";
        spanValidate.classList.remove('false');
        spanValidate.classList.add('true');
        result.classList.toggle('hide');
    }else if(respostaAPI.valid == false){
        spanValidate.textContent = "Falso";
        spanValidate.classList.remove('true');
        spanValidate.classList.add('false');
        result.classList.toggle('hide');
    }
    if(respostaAPI.valid == 897){
        spanValidate.textContent = "Formato inválido";
        spanValidate.classList.remove('true');
        spanValidate.classList.add('false');
        result.classList.toggle('hide');
    }
}

buttonSubmit.addEventListener('click', ()=>{
    // console.log('teste');
    let result = document.querySelector('.result');
    const inputCPF = document.querySelector('.search-box-input').value;
    if(inputCPF == ""){
        result.classList.add('hide');
    }
    var url = `/v1/${inputCPF}`;
    // console.log(url);
    axios.get(url).then((response)=>{
        var respostaAPI = response.data;
        console.log(respostaAPI.valid);
        responseHTML(respostaAPI);
    });
})