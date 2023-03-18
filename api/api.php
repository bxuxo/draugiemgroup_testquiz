<?php

header("Access-Control-Allow-Origin: *"); // sis ir vajadzigs lai varetu requestus taisit starp 2 localhostiem

include "util.php";
$access = new quiz("draugiemgroup_quiz");

$action = $_GET["action"];

if ($action == "get_themes") {
    $list = $access->get_quiz_names( );
    echo json_encode($list);
} else if ($action == "get_quiz") {
    $id = $_GET["id"];
    $row = $access->get_quiz_data($id);
    echo json_encode($row);
} else if ($action == "finish") {
    $name = $_GET["name"];
    $answers = json_decode($_GET["ans"]);
    $id = $_GET["id"];
    
    $points = 0; $max_points = 0;
    $quiz_data = $access->get_quiz_data($id);
    $q_data = json_decode($quiz_data[0]["answers_data"], true);
    foreach ($q_data as $idx => $question) {
        $c_answers = $question["answers"];
        foreach ($c_answers as $ans_idx => $answer_arr) {
            if ($answer_arr[1] == true) {
                if ($ans_idx == $answers[$idx]) {
                    $points += 1;
                }
            }
        } $max_points += 1;
    } 

    $access->add_result($name, $points, $max_points, $id);

    echo json_encode([
        "points" => $points,
        "max_points" => $max_points
    ]);
}

?>