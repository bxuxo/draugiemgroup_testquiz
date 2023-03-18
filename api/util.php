<?php
// sis fails ir strikti prieks datubazes klasem

class access {
    protected $conn;
    function __construct($database_name) { // saja gadijuma draugiemgroup_quiz
        $this->conn = new mysqli("localhost", "root", "", $database_name);
    }
}

class quiz extends access {
    // set data
    function add_quiz($quiz_name, $answers_data) {
        $this->conn->execute_query("INSERT INTO quiz_data (quiz_name, answers_data) VALUES (?, ?)", [$quiz_name, $answers_data]);
    }
    function add_result($name, $points, $max_points, $quiz_id) {
        $this->conn->execute_query("INSERT INTO results (completed_quiz_id, score, max_score, uname) VALUES (?, ?, ?, ?)", [$quiz_id, $points, $max_points, $name]);
    }

    // get data
    function get_quiz_names( ) {
        $ret = $this->conn->query("SELECT id, quiz_name FROM quiz_data")->fetch_all(MYSQLI_ASSOC);
        return $ret;
    }
    function get_quiz_data($id) {
        $ret = $this->conn->query("SELECT * FROM quiz_data WHERE id=$id")->fetch_all(MYSQLI_ASSOC);
        return $ret;
    }
}


?>