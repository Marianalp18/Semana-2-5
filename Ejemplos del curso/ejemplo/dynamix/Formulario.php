<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $tamano = (isset($_POST ['tamano']) && $_POST ['tamano']!= "")? $_POST ['tamano'] : "no especifico";
        echo $tamano;
        echo '<br>';
        echo "
        <table border='1'>
            <tbody>
        ";
        
        for ($x=0; $x<$tamano; $x++)
        {
            echo '<tr>';
            for($y=0; $y<$tamano;$y++)
            {
                echo '<td>';
                if($x%2==0)
                {
                    if($y%2==0)
                    {
                    echo '++';
                    }
                    else
                    {
                        echo '--';
                    }
                }
                        else
                        {
                            if($y%2==0)
                            {
                            echo '--';
                            }
                        else
                            {
                            echo '++';
                            }
                        }
                    echo '</td>';
            }  
            echo '</tr>';
        }
        echo '</tbody></table>'; 
    
    ?>
</body>
</html>