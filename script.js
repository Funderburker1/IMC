function calcular() {
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    let resultado = document.querySelector('.res');

    altura = Number(altura.value)
    peso = Number(peso.value);

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        resultado.innerHTML = `<h2>Seu imc é de : ${imc.toFixed(1)}</h2> <br/>
        <h3>Você está abaixo do peso ideal. </h3><br/> 
        <p>
            Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico.
        </p>`;

    } else if (imc > 18.5 && imc <= 24.9) {
        resultado.innerHTML = `<h2>Seu imc é de : ${imc.toFixed(1)}</h2> <br/>
        <h3>Parabéns, você está com o peso normal.</h3> <br/> 
        <p>
            Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.
        </p>`;

    } else if (imc > 25 && imc <= 29.9) {
        resultado.innerHTML = `<h2>Seu imc é de : ${imc.toFixed(1)}</h2> <br/>
        <h3>Você está com sobrepeso</h3> <br/>
        <p>
            Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.
        </p>`;

    } else if (imc > 30 && imc <= 34.9) {
        resultado.innerHTML = `<h2>Seu imc é de : <strong class="yellow">${imc.toFixed(1)}</strong> </h2> <br/>
        <h3 class="yellow">Você está com obesidade grau I</h3><br/> 
        <p> 
            Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você.
        </p>`;

    } else if (imc > 35 && imc <= 39.9) {
        resultado.innerHTML = `<h2>Seu imc é de : <strong class="red">${imc.toFixed(1)}</strong> </h2> <br/>
        <h3 class="red">Você está com obesidade grau II</h3><br/> 
        <p>
            Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo.
        </p>`;

    } else if (imc > 40) {
        resultado.innerHTML = `<h2>Seu imc é de : <strong class="red">${imc.toFixed(1)}</strong> </h2> <br/>
        <h3 class="red">Você está com obesidade grau III</h3><br/> 
        <p>
            Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.
        </p>`;

    }

}