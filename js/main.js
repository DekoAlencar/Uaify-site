$(document).ready(function() {
    $("#telefone").mask('(00) 00000-0000');
   carregarEstados();
});

$(document).scroll(function(){
    if($(document).scrollTop()>600){
        $("nav").addClass('bg-nav');
    }else{
        $("nav").removeClass('bg-nav');
    }
});