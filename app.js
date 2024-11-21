function criaCartao(categoria,pergunta,resposta){
let container = document.getElementById('container');
let cartao = document.createElement('article');
cartao.classname = 'cartao';

cartao.innerHTML = `
                 <div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${pergunta}</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${respostas}</p>
                    </div>
                </div>
                `

                let respostaEstaveVisivel = false;

                function viraCartao() {
                    respostaEstaveVisivel = !respostaEstaveVisivel;
                    cartao.classList.toggle('active', respostaEstaVisivel);
                }

 cartao.addEventListener('click', viraCartao);

 container.appendChild(cartao);          
}

