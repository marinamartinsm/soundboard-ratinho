let audios = [
  {local: './sounds/ele-nao-e-o-pai.mp3', legenda: 'Ele Não é o Pai'},
  {local: './sounds/grito.mp3', legenda: 'Grito'},
  {local: './sounds/jesus.mp3', legenda: 'Jesus!'},
  {local: './sounds/pare.mp3', legenda: 'Pare!'},
  {local: './sounds/que-isso-meu-filho.mp3', legenda: 'Que Isso, Meu Filho'},
  {local: './sounds/rapazzz.mp3', legenda: 'Rapazzz'},
  {local: './sounds/ratinhoo.mp3', legenda: 'Ratinhooo'},
  {local: './sounds/uepa.mp3', legenda: 'Uepa!'},
  {local: './sounds/vixi-ratinho.mp3', legenda: 'Vixi!'}
]

let botoes = document.querySelectorAll('.botao')
let legendas = document.querySelectorAll('p')

for (let i=0; i<9; i++){
  legendas[i].textContent = audios[i].legenda
  botoes[i].setAttribute('data-item', i)
}

let audioTag = document.querySelector('audio')

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    let som = audios[botao.getAttribute('data-item')]
    audioTag.setAttribute('src', som.local)

    audioTag.addEventListener('loadeddata', () => {
      audioTag.play()
    })
  })
})