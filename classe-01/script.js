const cep = document.querySelector('#cep');
const city = document.querySelector('#city');
const road = document.querySelector('#road');

cep.addEventListener('change', function () {
    const cepInserted = cep.value;

    if (!cepInserted) {
        return;
    }

    if (cepInserted.length !== 8) {
        alert('O campo CEP deve ter 8 digítos!');
        cep.value = '';
        return;
    }

    const promiseAnswer = fetch(`https://viacep.com.br/ws/${cepInserted}/json/`);



    promiseAnswer.then(answer => {
        const promiseBody = answer.json();

        promiseBody.then(body => {
            if (body.erro) {
                alert('Insira um CEP válido!');
                cep.value = '';
                return;
            }
            city.value = body.localidade;
            road.value = body.logradouro;
        })
    })

});