var num = window.document.getElementById ('n1txt')
var res = window.document.getElementById ('res')
var lista = window.document.getElementById ('lista')
var valores = []

function isNumero(n){//Verificar se é um número válido 
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){//Verificar se ta na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){//Para saber se é um número, e se já está na lista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('ERRO! VALOR INVÁLIDO OU JÁ ADICIONADO. VERIFIQUE')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('ADICIONE VALORES ANTES DE FINALIZAR.')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores [pos] > maior){
                maior = valores[pos]
            }
            if (valores [pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} elementos<p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}<p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}<p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}`
        res.innerHTML += `<p>A média dos valores é ${media}`
    }
}