<?php
    $villanos=["Lord Farquad", "Encantador", "Hada madrina"];
    $amigos=["Mejor amigo"=>"Burro",
            "esposa"=>"Fiona",
            "Tercero"=> "Jengi"];

    /*foreach($villanos as $llave => $valor){
        echo $llave." ".$valor."<br/>";
    }*/    

    $cadena_vill=implode(",", $villanos);
    echo $cadena_vill."<br/>";

    $arr_villanos=explode(",", $cadena_vill);
    print_r($arr_villanos);
    echo "<br/>";

    $texto="Hola curso web";
    $arr=str_split($texto);
    print_r($arr);
    echo "<br/>";
    echo strtolower($texto);
    echo "<br/>".$villanos[0]."<br/>";
    echo chr (97);
    echo ord('S');
?>