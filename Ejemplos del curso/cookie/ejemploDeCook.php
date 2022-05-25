<?php

    setcookie("Galleta", "Datos importantes", time() + 3600);


    $cookie = (isset($_COOKIE["Galleta"]) && $_COOKIE["Galleta"] != "")? $_COOKIE["Galleta"]:false;

   if($cookie)
   {
       echo "El valor de mi cookie es:".$cookie;
   }
   else
   {
       echo "Se comieron nuestra galleta :c";
   }
?>
