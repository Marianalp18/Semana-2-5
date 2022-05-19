<?php

    $nombre = (isset($_POST['nombre']) && $_POST["nombre"] != "")? $_POST['nombre'] : "no especifico";
    $apellidos = (isset($_POST['apellidos']) && $_POST["apellidos"] != "")? $_POST['apellidos'] : "no especifico";
    $edad = (isset($_POST['edad']) && $_POST["edad"] != "")? $_POST['edad'] : "no especifico";
    $direccion = (isset($_POST['direccion']) && $_POST["direccion"] != "")? $_POST['direccion'] : "no especifico";
    $noboletos = (isset($_POST['noboletos']) && $_POST["noboletos"] != "")? $_POST['noboletos'] : "no especifico";
    $boleto = (isset($_POST['boleto']) && $_POST["boleto"] != "")? $_POST['boleto'] : "no especifico";

    if ($noboletos < 1 || $noboletos > 15)
    echo "<strong><h1>No es posible vender esta cantidad, intenta de nuevo.<h1/><strong/>";
    if($noboletos > 0 && $noboletos <=15)
    {
   
    echo "<h1 align=\"center\">Ticket<h1>";

        switch ($boleto)
    {
    case "Normal";
    for($i=0; $i<$noboletos; $i++)
    {
    echo "<table border='1' cellpadding='15px' bgcolor='#C8A2C8'>";
        echo "<thead>";
            echo "<tr>";
                echo"<th colspan='4'><h3>Boleto de six flags</h3></th>";
            echo "</tr>";
        echo "</thead>";

        echo "<tbody>";

            echo "<tr>";
                echo "<td>$nombre</td>";
                echo "<td>$apellidos</td>";
                echo "<td>$edad</td>";
                echo "<td rowspan='3'><img src='https://i.pinimg.com/564x/f6/58/81/f65881cdb9d53f4ce743d212a8047750.jpg'> </td>";
    
            echo "</tr>";

            echo "<tr>";
                echo "<td>$direccion</td>";
                echo "<td>$noboletos</td>";
                echo "<td>$boleto</td>"; 
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='3'>Si sobrevives</td>";
            echo "</tr>";
        echo "</tbody>";
    echo "</table>";
    }
    break;

    case "Adolescente";
    for($i=0; $i<$noboletos; $i++)
    {
    echo "<table border='1' cellpadding='15px' bgcolor='#C8A2C8'>";
        echo "<thead>";
            echo "<tr>";
                echo"<th colspan='4'><h3>Boleto de six flags</h3></th>";
            echo "</tr>";
        echo "</thead>";

        echo "<tbody>";

            echo "<tr>";
                echo "<td>$nombre</td>";
                echo "<td>$apellidos</td>";
                echo "<td>$edad</td>";
                echo "<td rowspan='3'> <img src='https://i.pinimg.com/564x/70/7c/a1/707ca17d1fb6419946e8c25385d7349f.jpg'> </td>";
    
            echo "</tr>";

            echo "<tr>";
                echo "<td>$direccion</td>";
                echo "<td>$noboletos</td>";
                echo "<td>$boleto</td>"; 
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='3'>Sube a tu crush al superman</td>";
            echo "</tr>";
        echo "</tbody>";
    echo "</table>";
    }
    break;

    case "Flash pash";
    for($i=0; $i<$noboletos; $i++)
    {
    echo "<table border='1' cellpadding='15px' bgcolor='#C8A2C8'>";
        echo "<thead>";
            echo "<tr>";
                echo"<th colspan='4'><h3>Boleto de six flags</h3></th>";
            echo "</tr>";
        echo "</thead>";

        echo "<tbody>";

            echo "<tr>";
                echo "<td>$nombre</td>";
                echo "<td>$apellidos</td>";
                echo "<td>$edad</td>";
                echo "<td rowspan='3'> <img src='https://i.pinimg.com/564x/11/e9/c8/11e9c8314334739a49118ee8f020cdc7.jpg'> </td>";
    
            echo "</tr>";

            echo "<tr>";
                echo "<td>$direccion</td>";
                echo "<td>$noboletos</td>";
                echo "<td>$boleto</td>"; 
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='3'>No lo pienses y subete a la medusa</td>";
            echo "</tr>";
        echo "</tbody>";
    echo "</table>";
    }
    break;


    case "El que se vomita";
    for($i=0; $i<$noboletos; $i++)
    {
    echo "<table border='1' cellpadding='15px' bgcolor='#C8A2C8'>";
        echo "<thead>";
            echo "<tr>";
                echo"<th colspan='4'><h3>Boleto de six flags</h3></th>";
            echo "</tr>";
        echo "</thead>";

        echo "<tbody>";

            echo "<tr>";
                echo "<td>$nombre</td>";
                echo "<td>$apellidos</td>";
                echo "<td>$edad</td>";
                echo "<td rowspan='3'> <img src='https://i.pinimg.com/564x/a4/e5/29/a4e529e599d69b0eaf96cea32eff3a52.jpg'> </td>";
    
            echo "</tr>";

            echo "<tr>";
                echo "<td>$direccion</td>";
                echo "<td>$noboletos</td>";
                echo "<td>$boleto</td>"; 
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='3'>Puras verguenzas contigo</td>";
            echo "</tr>";
        echo "</tbody>";
    echo "</table>";
    }
    break;


    case "De pareja";
    for($i=0; $i<$noboletos; $i++)
    {
    echo "<table border='1' cellpadding='15px' bgcolor='#C8A2C8'>";
        echo "<thead>";
            echo "<tr>";
                echo"<th colspan='4'><h3>Boleto de six flags</h3></th>";
            echo "</tr>";
        echo "</thead>";

        echo "<tbody>";

            echo "<tr>";
                echo "<td>$nombre</td>";
                echo "<td>$apellidos</td>";
                echo "<td>$edad</td>";
                echo "<td rowspan='3'> <img src='https://i.pinimg.com/564x/77/ba/01/77ba018ebc19c5238f51503c19ca2f38.jpg'> </td>";
    
            echo "</tr>";

            echo "<tr>";
                echo "<td>$direccion</td>";
                echo "<td>$noboletos</td>";
                echo "<td>$boleto</td>"; 
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='3'>Felicidades</td>";
            echo "</tr>";
        echo "</tbody>";
    echo "</table>";
    }
    break;
    }
}
    
?>