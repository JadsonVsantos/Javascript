var idade = 65
console.log(`Você tem idade ${idade} anos`)
if (idade < 16) {
    console.log('Nâo vota')
} else  if (idade < 18 || idade > 65) { 
        console.log('Voto opcional')
   } else {
        console.log('voto é obrigatório')
   } 