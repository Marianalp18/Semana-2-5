<?php
    $nombre = (isset($_POST['nombre'])&& $_POST["nombre"] != "")? $_POST['nombre'] : "no especifico";
    $apellidos = (isset($_POST['nombre'])&& $_POST["apellidos"] != "")? $_POST['apellidos'] : "no especifico";
    echo $nombre."<br/>".$apellidos;
?>