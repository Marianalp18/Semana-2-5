<?php
   session_name("sesionChida");
   session_id("123456789");
   session_start();
    if(isset($_SESSION["nombre"]))
    {
        session_unset();
        session_destroy();
        header("location: .\formulario_sesion.php")
    }
?>