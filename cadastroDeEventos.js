let data = 10
let idade = 18
let listaDeParticipante = ['mario', 'caio', 'fernanda', 'paula', 'david']
let listaDeParlestrante = ['roberto', 'carlos', 'julia']
let quantidadeDePalestrante = listaDeParlestrante.length
let quantidadeDeParticipante = listaDeParticipante.length
let quantidadeMaxima = listaDeParticipante.length + listaDeParlestrante.length

if (data > 10) {
  console.log(
    'Voçê não pode realizar seu cadrastro pois a data é posterior ao evento'
  )
} else {
  if (idade < 18) {
    console.log(' Voçê não pode realizar o cadrastro pois não tem idade miníma')
  } else {
    if (quantidadeMaxima > 100) {
      console.log(
        'Desculpe você não possível realizar seu cadrastro pois a capacidade maxima de participante foi exedida'
      )
    } else console.log('Cadastrato realizado com sucesso')
  }
}

console.log(quantidadeDeParticipante + 'Participantes')
console.log(quantidadeDePalestrante + 'Palestrantes')
console.log(quantidadeMaxima + 'Quantidades de pessoas')
