<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicial sesion</title>
</head>
<body>
    <?php
        if (isset($_SESSION["nombre"]))
        {
            header("location:"./");
        }
    ?>
    <from action="./dynamicx/sesion.php"method="post">
        <label for="usuario">
            <input type="text" name="nombreUsuario" id="usuario">
        </label>
        <button>Iniciar sesion</button>
    </form>
</body>
</html>