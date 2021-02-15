function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let anoInput = window.document.getElementById('birthyear')
    let res = document.getElementById('textoPreencherCampos')  
    let img = document.getElementById("foto")
    if(anoInput.value.length == 0 || anoInput.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!.")
    } else {
        let fsex = window.document.getElementsByName('gender')
        let idade = ano - anoInput.value
        var genero = fsex[0].checked ? 'Homem':'Mulher'
        
        if(genero === "Homem" && idade <= 12){
            img.src = "./foto-bebe-m.png"
        } else if(genero === "Homem" && idade <= 30 && idade >= 13){
            img.src = "./foto-jovem-m.png"
        } else if(genero === "Homem" && idade > 30 && idade < 65){
            img.src = "./foto-adulto-m.png"
        } else if(genero === "Homem" && idade >= 65){
            img.src = "./foto-idoso-m.png"
        }

        if(genero === "Mulher" && idade <= 12){
            img.src = "./foto-bebe-f.png"
        } else if(genero === "Mulher" && idade <= 30 && idade >= 13){
            img.src = "./foto-jovem-f.png"
        } else if(genero === "Mulher" && idade > 30 && idade < 65){
            img.src = "./foto-adulto-f.png"
        } else if(genero === "Mulher" && idade >= 65){
            img.src = "./foto-idoso-f.png"
        }

        if(idade < 105){
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        } else{
            res.innerHTML = `Detectamos Dinossauro com ${idade} anos.`
            img.src = "./dino.png"
        }
    }
    
}
