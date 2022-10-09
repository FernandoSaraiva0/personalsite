// Função para Consumir a API do Git Hub e mostrar os projetos
// Capturando a UL que comportará os dados
const ul = document.querySelector('ul');

// Função para receber os dados
function getApiGithub(){
    fetch('https://api.github.com/users/FernandoSaraiva0/repos')
        .then(async res => { // Try Catch, para receber os dados
            if(!res.ok) {
                throw new Error(res.status);
            }

            var data = await res.json()

            // Lista de projetos que quero mostrar
            var repos = ['bikcraft', 'CrudJava', 'pomodinho', 'blog_405']

            // Foreach para pegar o conteudo o array e comparar com os resultados que bem da API
            repos.forEach(function(nome) {
                data.map(item => {
                    let li = document.createElement('li')

                    li.classList.add('grid-cols-2','w-1/2','bg-amber-50', 'rounded-xl','p-5','m-3','shadow-xl')
                    
                    // Inserindo dados dentro da UL
                    if(item.name == nome){
                        li.innerHTML = `
                            <div class="title flex bg-amber-50 min-w-1/3 rounded-3xl p-2 items-center mb-1 shadow-xl">
                                <img class="mr-3 rounded-full shadow-xl"src="https://place-hold.it/30" alt="">
                                <p class="uppercase">${item.name.toUpperCase()}</p>
                            </div>
                            <div class="mt-24">
                                <p>${item.description}</p>
                                <a class="text-zinc-800" href="${item.svn_url}">Detalhes</a>
                            </div>
                        `
                    
                        ul.appendChild(li)
                    }
                })
            });
        }).catch(e => console.log(e))
}

getApiGithub()