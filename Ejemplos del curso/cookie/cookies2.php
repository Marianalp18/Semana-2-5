<?php

    $cookie = (isset($_COOKIE["Galleta"]) && $_COOKIE["Galleta"] != "")? $_COOKIE["Galleta"]:false;

    echo $cookie;

    setcookie("galleta", "",time()-1);

    if(isset($_COOKIE["Galleta"]) && $_COOKIE["Galleta"] != ""){
        echo "no se elimino";
    }
    else{
        echo "ya no tengo galletas, las tiré";
    }
?>