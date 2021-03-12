function verificar(){
    var anoAtual = new Date().getFullYear()
    var anoDigitado = window.document.getElementById('txtano')
    var anoNasc = Number(anoDigitado.value)
    var res = document.querySelector('div#res')

    if (anoDigitado.value.length == 0 || anoNasc > anoAtual){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var sexo = window.document.getElementsByName('radsex')
        var calc = anoAtual - anoNasc
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked){
            genero = 'Masculino'
            if (calc > 0 && calc < 19){
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (calc < 35) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (sexo[1].checked){
            genero = 'Feminino'
            if (calc > 0  && calc < 10){
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (calc < 35) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.innerHTML = `Gênero: ${genero} Idade: ${calc}`
        res.appendChild(img)
        
    }
}