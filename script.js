function carrega() {
    var horario =  document.getElementById('horario');
    var foto = document.getElementById('foto');
     var data = new Date();
    var hora = 13;
    var min = data.getMinutes();
    horario.innerHTML = `Agora são: <strong>${hora} horas e ${min} minutos.</strong>`;

    if (hora >= 5 && hora < 12){
        //Bom dia!
        foto.src = 'img/foto-manha.png';
        foto.style.transition = '1s'
        document.body.style.background = 'linear-gradient(135deg, #FFF734 0%, #F0F2C9 74%, #FFFA76 100%) fixed';
    } else if (hora >= 12 && hora <18){
        //Boa tarde!
        foto.src = 'img/foto-tarde.png';
        document.body.style.background = 'linear-gradient(135deg, #FFC031 0%, #F0F2C9 74%, #FFDA76 100%) fixed';
    } else {
        foto.src = 'img/foto-noite.png'
        document.body.style.background = 'linear-gradient(135deg, #02072D 0%, #607682 58%, #C7C5FF 100%) fixed';
    }
}
