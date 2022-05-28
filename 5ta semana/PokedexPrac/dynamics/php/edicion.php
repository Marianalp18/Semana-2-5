<?php
    require "config.php";

    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);
?>
<!DOCTYPE html>
<html>
    <head>
    <title>Pokedex</title>
    <!-- <link rel="stylesheet" href="statics/styles/pokedex.css"> -->
    </head>
    <body>
    <?php
        $nombre = (isset($_POST["nombre"]) && $_POST["nombre"]!= "")?$_POST["nombre"]:false;
        $altura = (isset($_POST["altura"]) && $_POST["altura"]!= "")?$_POST["altura"]:false;
        $peso = (isset($_POST["peso"]) && $_POST["peso"]!= "")?$_POST["peso"]:false;
        $exp_base = (isset($_POST["exp_base"]) && $_POST["exp_base"]!= "")?$_POST["exp_base"]:false;
        $tipo = (isset($_POST["tipo"]) && $_POST["tipo"]!= "")?$_POST["tipo"]:false;
    ?>

    <div id="contenedor-resultados"></div>
    </div>
    
    <div id="contenedor-mostrar" style="display:none">
    </div>

    <div id="contenedor-agregar" style="display:none">
        <form id="form-editable">
            <div><h2>Edita tu pokemon</h2></div>
            <div class="campo-form"><label>Nombre</label> <input type="text" name="nombre" value=<?php$nombre?>></div>
            <div class="campo-form"><label>Altura</label> <input type="number" name="altura" min="1" value=<?php$altura?>></div>
            <div class="campo-form"><label>Peso</label> <input type="number" name="peso" min="1" value=<?php$peso?>></div>
            <div class="campo-form"><label>Experiencia base</label> <input type="text" name="exp_base" min="1" value=<?php$exp_base?>></div>
            <div class="campo-form"><label>Tipo</label> <select id="select-tipos" name="tipo" value=<?php$tipo?>></select></div>
            <button id="btn-editar">Editar</button>
        </form>
        <?php
            $sql = "INSERT INTO pokemon VALUES(null, '$nombre', $altura, $peso, $exp_base)";
            $res = mysqli_query($con, $sql);
        
            if($res == false){
                $respuesta = array("ok"=>false, "texto" => "No se pudo editar pokemon");
                echo json_encode($respuesta);
            }
            else{
                $id = mysqli_insert_id($con);
        
                $sql = "INSERT INTO pokemon_types VALUES($id, $tipo, 1)";
                mysqli_query($con, $sql);
        
                $respuesta = array("ok"=> true, "id"=>$id, "texto" => "Se pudo editar pokemon");
                echo json_encode($respuesta);
            };
        ?>
    </div>
    </body>
</html>