// Função para Consumir a API do Git Hub e mostrar os projetos
// Capturando a UL que comportará os dados
const ul = document.querySelector('ul');
let bg = "bg-[url('https://picsum.photos/id/1/200/300')]"

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

                    li.classList.add('rounded-lg','basis-1/2','min-h-fit','p-5','m-3','shadow-xl')
                    li.style.setProperty('background-image', 'url("https://picsum.photos/seed/picsum/200/300")')
                    li.style.setProperty('background-size', 'cover')
                    li.style.setProperty('background-repeat', 'no-repeat')
                    
                    // Inserindo dados dentro da UL
                    if(item.name == nome){
                        li.innerHTML = `
                            <div class="title flex bg-amber-50 w-1/2 rounded-3xl p-5 items-center space-x-1 shadow-xl">
                                <img class="rounded-full shadow-xl"src="https://picsum.photos/seed/picsum/20" alt="">
                                <p class="uppercase">${item.name.toUpperCase()}</p>
                            </div>
                            <div class="mt-5">
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