<?php
$semana = (isset($_POST['semana']) && $_POST["semana"] != "")? $_POST['semana'] : "no especifico";
if($semana==1 || $semana==2 || $semana==3)
{
    header("Content-Type: application/zip");
    header("Content-Disposition: attachment; filename=semana$semana.zip");
    readfile("../statics/semana$semana.zip");
    exit;
}
echo "<a download href='../statics/saludo.pdf'>Saludo</a>";
echo "<iframe src='../statics/saludo.pdf'></iframe>";
echo "<a download='azulito,png' href='../statics/azul.pdf'>Imagen azul</a>";
?>