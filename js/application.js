window.onload = function(){ 
    //Pegando as referencisa pros pop ups
	var popupPalitos = document.getElementById('popup_opcao1');
	var popupEnigmas = document.getElementById('popup_opcao2');
	var popupVideos = document.getElementById('popup_opcao3');
	var popupJogos = document.getElementById('popup_opcao4');

	//Pegando as referencias dos botões que abrirão os pop ups
	var btnPalitos = document.getElementById("opcao1");
	var btnEnigmas = document.getElementById("opcao2");
	var btnVideos = document.getElementById("opcao3");
	var btnJogos = document.getElementById("opcao4");

	//Pegando as referencias dos botões x que fecharão os pop ups
	var span0 = document.getElementsByClassName("close")[0];
	var span1 = document.getElementsByClassName("close")[1];
	var span2 = document.getElementsByClassName("close")[2];
	var span3 = document.getElementsByClassName("close")[3];
	//Pegando as referencias dos botões "Agora não" que fecharão os pop ups
	var btnSairPopUp0 = document.getElementsByClassName("sair_popup")[0];
	var btnSairPopUp1 = document.getElementsByClassName("sair_popup")[1];
	var btnSairPopUp2 = document.getElementsByClassName("sair_popup")[2];
	var btnSairPopUp3 = document.getElementsByClassName("sair_popup")[3];

	//Funções que mostram os pop ups
	btnPalitos.onclick = function() {
	    popupPalitos.style.display = "block";
	}
	btnEnigmas.onclick = function() {
	    popupEnigmas.style.display = "block";
	}
	btnVideos.onclick = function() {
	    popupVideos.style.display = "block";
	}
	btnJogos.onclick = function() {
	    popupJogos.style.display = "block";
	}

	//Quando o usuario clica em X, fecha o pop up
	span0.onclick = function() {
	    popupPalitos.style.display = "none";
	}
	span1.onclick = function() {
	    popupEnigmas.style.display = "none";
	}
	span2.onclick = function() {
	    popupVideos.style.display = "none";
	}
	span3.onclick = function() {
	    popupJogos.style.display = "none";
	}

	//Quando o usuario clica em Agora não, fecha o pop up
	btnSairPopUp0.onclick = function() {
	    popupPalitos.style.display = "none";
	}
	btnSairPopUp1.onclick = function() {
	    popupEnigmas.style.display = "none";
	}
	btnSairPopUp2.onclick = function() {
	    popupVideos.style.display = "none";
	}
	btnSairPopUp3.onclick = function() {
	    popupJogos.style.display = "none";
	}

	//Se o usuário clicar fora da tela do pop up, fecha o pop up também
	window.onclick = function(event) {
	    if (event.target == popupPalitos) {
	        popupPalitos.style.display = "none";
	    }
	    if (event.target == popupEnigmas) {
	        popupEnigmas.style.display = "none";
	    }
	    if (event.target == popupVideos) {
	        popupVideos.style.display = "none";
	    }
	    if (event.target == popupJogos) {
	        popupJogos.style.display = "none";
	    }
	}
};
