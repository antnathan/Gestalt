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
		if(destino !== undefined){
		 location.href = (destino + ".html");
		} 
	});

	$("#telaenigma").click(function(){
		 location.href = ("telaenigma.php");
	});

	$("#foto").change(function(event){
	  $("#filename").text($(this).val());
	});

	$("#salvarEquipeForm").submit(function(event) {
		var equipe = $("#equipe").val().toLowerCase();
		var destino = $(this).attr('toLocation');
		var integrantes = $("#integrantes").val();
		var fase = 'cadastro';

		arquivo = arquivoEquipe(equipe);
		var equipeArray = [equipe,integrantes,arquivo];
		var fases = [true, true, true, true];

		localStorage.setItem('equipe', JSON.stringify(equipeArray));
		localStorage.setItem('fases', JSON.stringify(fases));		

		$.post("process.php", {fase:fase, file:arquivo, integrantes:integrantes},function(){ location.href = ("telamenu.html") });
	});

	$("#salvarPalitosForm").submit(function(event) {
		var equipe = JSON.parse(localStorage.getItem('equipe'));
		var fases = JSON.parse(localStorage.getItem('fases'));
		var destino = $(this).attr('toLocation');
		var reflexao = $("#reflexao").val(); 
		var fase = 'palitos';

		fases[0] = false;
		
		arquivo = equipe[2];

		localStorage.setItem('fases', JSON.stringify(fases));	

		$.post("process.php", {fase:fase, file:arquivo, reflexao:reflexao},function(){ location.href = ("telamenu.html") });
	});

	$("#salvarJogoForm").submit(function(event) {
		var equipe = JSON.parse(localStorage.getItem('equipe'));
		var fases = JSON.parse(localStorage.getItem('fases'));
		var destino = $(this).attr('toLocation');
		var jogo = "qualquer";
		var reflexao = $("#reflexao").val(); 
		var fase = 'jogo';

		fases[3] = false;
		
		arquivo = equipe[2];

		localStorage.setItem('fases', JSON.stringify(fases));	

		$.post("process.php", {fase:fase, file:arquivo,jogo:jogo, reflexao:reflexao},function(){ location.href = ("telamenu.html") });
	});

	$("#salvarVideoForm").submit(function(event) {
		var equipe = JSON.parse(localStorage.getItem('equipe'));
		var fases = JSON.parse(localStorage.getItem('fases'));
		var destino = $(this).attr('toLocation');
		var video = "qualquer";
		var reflexao = $("#reflexao").val(); 
		var fase = 'video';

		fases[2] = false;
		
		arquivo = equipe[2];

		localStorage.setItem('fases', JSON.stringify(fases));	

		$.post("process.php", {fase:fase, file:arquivo, video:video, reflexao:reflexao},function(){ location.href = ("telamenu.html") });
	});

	$("#enviarEnigmaForm").submit(function(event) {
		var equipe = JSON.parse(localStorage.getItem('equipe'));
		var fases = JSON.parse(localStorage.getItem('fases'));
		var destino = $(this).attr('toLocation');
		var local = $("#local").val();
		var lei = $("#leigestalt").val();
		var reflexao = $("#reflexao").val();
		var fase = 'enigma';
		var enigma = 'qualquer';

		fases[1] = false;
		arquivo = equipe[2];
		localStorage.setItem('fases', JSON.stringify(fases));	
		$.post("process.php", {fase:fase, file:arquivo, enigma:enigma, leigestalt: lei, local: local, reflexao: reflexao},function(){ location.href = ("telamenu.html") });		
	});	

});
//
// Switch case com os nomes das 10 equipes. Tentei colocar com e sem acentos, assim como pode aparecer se não estiver em UTF-8. Só trantando.
function arquivoEquipe(equipe) {
	var arquivo = "equipe00";
	switch (equipe){
			case "gestalt": 
				arquivo = "equipe01";
				break;
			case "unidade": 
				arquivo = "equipe02";
				break;
			case "segregação":
			case "segregacao":
			case "segregaÃ§Ã£o": 
				arquivo = "equipe03";
				break;
			case "unificação": 
			case "unificacao": 
			case "unificaÃ§Ã£o":
				arquivo = "equipe04";
				break;
			case "fechamento": 
				arquivo = "equipe05";
				break;
			case "continuidade": 
				arquivo = "equipe06";
				break;
			case "proximidade": 
				arquivo = "equipe07";
				break;
			case "semelhança": 
			case "semelhanca": 
			case "semelhanÃ§a": 
				arquivo = "equipe08";
				break;
			case "pregnância": 
			case "pregnancia": 
			case "pregnÃ¢ncia": 
				arquivo = "equipe09";
				break;
			case "cognição": 
			case "cognicao": 
			case "cogniÃ§Ã£o": 
				arquivo = "equipe10";
				break;
			default:
				arquivo = "equipe00"
		}
		return arquivo;
}

function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

      return array;
}

function sorteioEnigma() {
	var enigmas = shuffle(enigmasArray);

	var escolhido = enigmas[5];
	$("#enigmaEscolhido").text('"'+escolhido+'"');
}

function sorteioJogo() {
	var jogos = shuffle(jogosArray);

	var escolhido = jogos[3];
	$("#jogoEscolhido").attr('href', escolhido);
}

function sorteioVideo() {
	var videos = shuffle(videosArray);

	var escolhido = videos[4];
	$("#videoEscolhido").attr('href', escolhido);
}

function sorteioPalitos() {
	var x = Math.floor(Math.random() * 10) + 1 ; 

	var y = Math.floor(Math.random() * 10) + 1 ;
	$("#x").text(x);
	$("#y").text(y);
}

function fadeoutBtts() {

	var fases = JSON.parse(localStorage.getItem('fases'));

	for (var i = 0; i < fases.length; i++) {
		if(!fases[i]){
			var x = i + 1;
			$("#opcao"+x).css("background-color","#fff");
			$("#opcao"+x).css("color","#0B3142");
		}
	}
}