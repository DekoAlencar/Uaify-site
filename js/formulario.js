function validarEmail(email){
    var regex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i);
    if(regex.exec(email)){
        $("#email").before('<small style="color: red">Email inváldo</small>');
        return false;
    }
    return true;
}

$("#form").submit((event)=>{
    var obj = {
        nome: $("#nome").val(),
        telefone: $("#telefone").val(),
        email: $("#email").val(),
        estado: $("#estados").val(),
        cidade: $("#cidades").val(),
        mensagem: $("#mensagem").val()
    }

    if(!validarEmail(obj.email)){
        return;
    }
    
    $.ajax({
        type: "POST",
        url: "url_api",
        data: obj,
        dataType: "application/json"
    }).done((result)=>{
        alert("mensagem enviada");
    }).fail((error)=>{
        alert("não foi possível enviar a mensagem");
    })

    $('#form').each (function(){
        this.reset();
      });
})