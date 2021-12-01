// ============================ Criando app que interage com os processos e assincronismo =====================================
/*
const question = [
  'O que eu aprendi hoje?',
  'O que me aborreceu hoje, e o que eu posso fazer para evitar isto?',
  'Quantas pessoas eu ajudei hoje?'
]

const answers = []

// Usando uma arrow function (não precisa usar a palavra 'function')
const ask = (index = 0) => {
  // funciona como o console.log, é um print
  process.stdout.write(question[index] + '\n\n')
}

// Comando de entrada de dados, como um input. Recebe um argumento que é um evento de dados, e roda uma função especificada
process.stdin.on('data', data => {
  // .trim remove espaços vazios no começo e no fim, para formatar a string, este process vai printar
  // o dado inserido
  // Este comando faz com que a resposta seja printada abaixo da entrada de dados, visualmente fica duplicado
  process.stdout.write(data.toString().trim() + '\n')

  // Vamos colocar as respostas numa lista(array)
  answers.push(data.toString().trim())

  // Agora vamos criar um loop para que possamos responder cada pergunta, assim, se houverem menos respostas que perguntas ele passara para proxima pergunta

  if (answers.length < question.length) {
    // a pergunta será a de index igual ao numero de itens em answers, isso vai sempre fazer avançar pra proxima questão pq a cada pergunta populamos o array answer
    ask(answers.length)
  } else {
    console.log(answers)
    // finaliza o processo
    process.exit()
  }
})

// Quando o exit ser iniciado para fechar o programa, isso aqui irá acontecer primeiro devido ao assincronismo
// O comando indica que DURANTE O PROCESSO, ao chegar em exit, iniciara a nova arrow function
process.on('exit', () => {
  console.log(`
  Bacana Jorge!
  
  O que você aprendeu hoje foi: ${answers[0]}
  
  O que te aborreceu e voce poderia ter feito melhor foi ${answers[1]}
  
  Você ajudou ${answers[2]} pessoas`)
})

ask()
*/
//====================== Controlando medidas de tempo ===========================

//setTimeOut roda uma função depois de x milisegundos: setTimeout(funcao, tempo)
const timeOut = 3000
const finished = () => console.log('done!')
setTimeout(finished, timeOut)
console.log(
  'Isso é printado primeiro devido ao assincronismo, setimeout fica dentro do callback esperando finalizar, enquanto outras threads são executadas imediatamente \n'
)

// o cleartimeout cancela um timeOut, por exemplo se setTimerout estivesse numa variavel como:

// let timer = setTimerout(finished, timeOut)
//clearTimeout(timer)

// O timer não iria rodar por esta sendo cancelado

// Podemos também rodar uma função N vezes depois de X segundos com setInterval

const time1 = 1000
const checking = () => console.log('Checking!')

// Vai rodar indefinidamente (pra isso precisamos chamar a função, aqui estamos sóa tribuindo ela a uma variavel)
let interval = setInterval(checking, time1)

// Agora vamos cancelar imediatamente
// clearInterval(interval)

//Mas queremos cancelar depois de um tempo X
setTimeout(() => clearInterval(interval), 3000)
