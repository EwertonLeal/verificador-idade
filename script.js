function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('ano')
    var res = document.querySelector('div#res')

   if (Fano.value. length == 0 || Fano.value.length > ano) { /* verificar se o ano está vazio */
        alert('verifique os dados e tente novamente')
   } else {
        var Fsex = document.getElementsByName('radSex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        var img = document.createElement('img') /* Cria dinâmicamente uma tag img
         */
        img.setAttribute('id', 'foto') /* Cria um ID chamado foto para a tag IMG */
        

        if (Fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 13) {
                // criança
                img.setAttribute('src', 'kid-boy.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'young-boy.jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'man.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'old-man.jpg')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 13) {
                // criança
                img.setAttribute('src', 'kid-girl.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'young-girl.jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'woman.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'old-lady.jpg')
            }
        }
             res.innerHTML = `verificamos ${genero} com ${idade} anos`
             res.append(img)  
   }
}