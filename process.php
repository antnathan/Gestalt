<?php
   
   $arquivo = "equipes/";
   $arquivo .= $_POST['file'];
   $arquivo .= ".json";
   $arr_data = array(); // create empty array

  try
  {
  	$fase = $_POST['fase'];

  	if($fase === 'enigma'){ 
  		$formdata = array(
	   	  'enigma'=> $_POST['enigma'],
	      'lei'=> $_POST['leigestalt'],
	      'local'=> $_POST['local'],
	      'reflexaoEnigma'=> $_POST['reflexao'],
	   );
  	} elseif($fase === 'cadastro') {
  		$formdata = array(
	      'integrantes'=> $_POST['integrantes']
	   );
  	} elseif($fase === 'palitos') {
  		$formdata = array(
  			'reflexaoPalitos'=> $_POST['reflexao']
  		);
  	} elseif ($fase === 'jogo') {
  		$formdata = array(
	  		'jogo'=> $_POST['jogo'],
		    'reflexaoJogo'=> $_POST['reflexao']
		);
  	} elseif($fase === 'video'){
  		$formdata = array(
	  		'video'=> $_POST['video'],
		    'reflexaoVideo'=> $_POST['reflexao']
		);
  	}
	   

	   //Get data from existing json file
	   $jsondata = file_get_contents($arquivo);

	   // converts json data into array
	   $arr_data = json_decode($jsondata, true);
	   
	   // Push user data to array
	   array_push($arr_data,$formdata);

       //Convert updated array to JSON
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents($arquivo, $jsondata)) {
	        echo 'Data successfully saved';
	    }
	   else {
	        echo "error";
	   }


   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

?>

	   
	   //write json data into data.json file
