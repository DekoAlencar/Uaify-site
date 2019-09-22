$(document).ready(function() {
    $("#telefone").mask('(00) 00000-0000');
   carregarEstados();
});

$(document).scroll(function(){
    height = getDimensao($(document).width());
    heightScroll = $(document).scrollTop();
    if(heightScroll > height){
        $("nav").addClass('bg-nav');
    }else{
        $("nav").removeClass('bg-nav');
    }
});

function getDimensao(width){
    return width>500 ? 600 : 150;
}