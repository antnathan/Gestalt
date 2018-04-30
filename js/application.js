$(document).ready(function(){
	$(".opcoes").click(function(event) {
		var opcao = $(this).attr('id');
		$("#popup_" + opcao).css('display', 'block');
	});

	$(".close").click(function(event) {
		$(".popup").css('display', 'none');
	});

	$(".sair_popup").click(function(event) {
		$(".popup").css('display', 'none');
	});

	$(window).click(function(e) {
		if ($(e.target).attr('class') == "popup") {
        	$(".popup").css('display','none');
    	}
	});

	$(".botao").click(function(){
		var destino = $(this).attr('toLocation');
		 location.href = (destino + ".html");
	});

});


