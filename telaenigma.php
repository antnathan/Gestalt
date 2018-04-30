<!DOCTYPE html>
<html>
<head>
	<meta charset = " UTF-8 ">
	<title> Caça Gestalt </title>
	<link rel="stylesheet" type="text/css" href="css/gestalt.css">
	<script src="js/jquery.js"></script>
	<script src="js/valores.js"></script>
	<script src="js/application.js" type="text/javascript" charset="utf-8" async defer></script>
</head>
<?php
if(isset($_FILES['foto']))
   {
      date_default_timezone_set("Brazil/East"); //Definindo timezone padrão

      $ext = strtolower(substr($_FILES['foto']['name'],-4)); //Pegando extensão do arquivo
      $new_name = date("Y.m.d-H.i.s") . $ext; //Definindo um novo nome para o arquivo
      $dir = 'equipes/imagens/'; //Diretório para upload

      move_uploaded_file($_FILES['foto']['tmp_name'], $dir.$new_name); //Fazer upload do arquivo
   }
?>
	<body onload="sorteioEnigma()">
		<header class="vermelho">Enigma</header>
			<div class="fase" style="text-align: center"> 
					<div class="enigma" id="enigmaEscolhido"></div> 			
			
					<div id="enunciado">Leia atentamente o enigma acima. A resposta desse enigma levará a um local do prédio, 
					onde se encontra um cartaz que expressa um ou mais lei(s) da Gestalt. 
					Em seguida, a equipe deverá fazer uma foto de alguma parte do prédio que expresse esta(s) lei(s). 
					Insira no espaço abaixo e justifique como ela se relaciona com a imagem do cartaz.
					</div>	
					<div id ="enviar_img">
						<form action="#" method="POST" id="imagemForm" enctype="multipart/form-data" style="width: 100%; display: inherit;">
							<span id="filename" class="input">nomedoarquivo.jpeg</span>
							<label id="buttonFoto" for="foto">Selecionar arquivo</label>
						    <input name="foto" id="foto" type="file" class="button">
						    <input type="submit" value="Enviar" class="button" id="submitFoto" style="display: block;">
						</form>
						</div>	
					<form action="" method="" id="enviarEnigmaForm" toLocation="telamenu" accept-charset="utf-8" enctype="multipart/form-data">				
						<input class="input" type="text" id="leigestalt" placeholder=" Digite aqui a(s) lei(s) da Gestalt no cartaz" name="leigestalt" required/>
						<br>
						<input class="input" type="text" id="local" placeholder=" Digite aqui o local onde estava o cartaz" name="local" required/>				
							
						<textarea class="input" id="reflexao" type="text" name="reflexao" rows="6" maxlength="1500" minlength="500" required>O que percebemos...</textarea>	
						<input class="botao" type="submit"/>
						<br>
					</form>
									
			</div>		
	</body>
</html>
