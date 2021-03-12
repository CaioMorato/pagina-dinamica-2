function calculadora(){
    var inputAno = document.getElementById('anoNasc')
    var inputSexo = document.getElementsByName('radsex')
    var anoNasc = Number(inputAno.value)
    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = anoAtual - anoNasc
    var res = document.getElementById('res')
    var imagem = document.createElement('img')


    if (inputSexo[0].checked ){
        if (idade > 0 && idade <= 18) {
            res.innerHTML = `Detectamos sexo: Masculino idade: ${idade}`    
            imagem.src = 'foto-jovem-m.png'
            document.getElementById('res').appendChild(imagem)
        } else if (idade > 18 && idade <= 47){
            res.innerHTML = `Detectamos sexo: Masculino idade: ${idade}`    
            imagem.src = 'foto-adulto-m.png'
            document.getElementById('res').appendChild(imagem)
        } else {
            res.innerHTML = `Detectamos sexo: Masculino idade: ${idade}`
            imagem.src = 'foto-idoso-m.png'
            document.getElementById('res').appendChild(imagem)
        }

    } else {
        if (idade > 0 && idade <= 18) {
            res.innerHTML = `Detectamos sexo: Feminino idade: ${idade}`    
            imagem.src = 'foto-jovem-f.png'
            document.getElementById('res').appendChild(imagem)
        } else if (idade > 18 && idade <= 47){
            res.innerHTML = `Detectamos sexo: Feminino idade: ${idade}`    
            imagem.src = 'foto-adulto-f.png'
            document.getElementById('res').appendChild(imagem)
        } else {
            res.innerHTML = `Detectamos sexo: Feminino idade: ${idade}`
            imagem.src = 'foto-idoso-f.png'
            document.getElementById('res').appendChild(imagem)
        }        
    }
    

}