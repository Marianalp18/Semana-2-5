<?php
    $nombre = (isset($_POST["nombreUsuario"]) && $_POST["nombreUsuario"] !== "")? $_POST["nombreUsuario"]:false;
    
    if ($nombre != false)
    {
        $_SESSION["nombre"] = $nombre;

        echo "El usuario con sesion iniciada es:".$_SESSION["nombre"];
    }


?>