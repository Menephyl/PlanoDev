const apiKey = 't10WfgyeIYcetUeckEsiYQzDbcJCWheR' // CHAVE GIPHY gratuita

const campoBusca = document.querySelector('#campoBusca')
const botaoBuscar = document.querySelector('#botaoBuscar')
const containerResultado = document.querySelector('#resultado')

async function buscarGifs(){
    const termo = campoBusca.value
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${termo}&limit=1`
    try {
        const resposta = await fetch(url)
        const dados = await resposta.json()

        const urlGif = dados.data[0].images.original.url

        containerResultado.innerHTML = `<img src="${urlGif}"alt="Gif de ${termo}">`
    } catch (erro){
        console.error('Erro ao buscar gif:, verifique em rede a requisição',erro)
        containerResultado.innerHTML =`<p> erro 404 nao encontrado ou erro 500 de servidor</p>`
    }
}

botaoBuscar.addEventListener('click',buscarGifs)