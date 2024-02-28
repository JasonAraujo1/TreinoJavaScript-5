
let valores = []

function adicionar(){
    
    let num = Number(inpNumber.value)

    if(num <= 0 || num > 100){
        window.alert(`Seu número é ${num}. Válido somente entre 0 e 100!`)
        select.text = ''//se apertar o botão sem número adicionado vai ficar com o array vazio. Em vez de zero
    }
   
    
    valores.push(num)//adiciona no array valores o elemento num

    let select = document.getElementById('select')
    let option = document.createElement('option')

    option.text += `Valor adicionado: ${num}`
    select.appendChild(option)
    
    inpNumber.value ='' // Limpa o valor do input
    inpNumber.focus() // Coloca o foco de volta no input
   

}

function finalizar(){
    
    if(valores <= 0 || valores > 100){
        
        window.alert (`[ERROR]. Adicione um número acima!`)
        res.innerHTML = '' //se apertar o botão sem número adicionado vai ficar com o res vazio. Em vez de zero
        location.reload(true)
    }

    let res = document.getElementById('res')

    res.innerHTML += `\u{1f449} Ao todo temos ${valores.length} valores cadastrados; </br>`

    valores.sort()//bota os elementos do array em ordem crescente
   
    res.innerHTML += `\u{1f449} O menor número é: ${valores[0]}; </br>`
 
    res.innerHTML += `\u{1f449} O maior número é: ${valores[valores.length - 1]}; </br>`

   let soma = 0
   for(c = 0; c < valores.length; c++){
    soma += valores[c]
}
    res.innerHTML += `\u{1f449} A soma dos valores é: ${soma}; </br>`

    res.innerHTML += `\u{1f449} A média dos valores é: ${soma/valores.length};`
} 

function limpar(){
    location.reload(true)
}