<?php
   session_name("sesionChida");
   session_id("123456789");
   session_start();
   $nombre = (isset($_POST["nombreUsuario"]) && $_POST["nombreUsuario"] !== "")? $_POST["nombreUsuario"]:false;

    if ($nombre != false)
    {
        $_SESSION["nombre"] = $nombre;

        echo "El usuario con sesion iniciada es:".$_SESSION["nombre"];
        echo "
            <form action='.\cerrarSesion.php' method='post' target='_self'>
            <button>Cerrar sesion</button>
            </from>
            ";
    }
    elseif(isset($_SESSION["nombre"]))
    {
        echo"El usuario con sesion iniciada es: ".$_SESSION["nombre"];
        echo "
                <form action=
            ";
    }

  
?>