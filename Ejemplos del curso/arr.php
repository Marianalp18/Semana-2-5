<?php
    $arr = array(1, 2, 3, 4);

    $numArrays =count($arr);

    array_push($arr, "?", 5, 6);

    print_r($arr);

    echo "<br/>";

    array_pop($arr);

    print_r($arr);
    echo "<br/>";

    array_shift($arr);

    print_r($arr):

    echo "<br/>";

    print_r(array_keys($arr));

    $arr2 = array ("batman", "superman"; "flash");

    $arrayCompleto = array_merge($arr, $arr2);

    echo "<br/><br/>";

    print_r($arrayCompleto);

?>