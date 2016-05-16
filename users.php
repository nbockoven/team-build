<?php
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");

// $conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");

// $result = $conn->query("SELECT CompanyName, City, Country FROM Customers");

// $outp = "";

// while( $rs = $result->fetch_array( MYSQLI_ASSOC ) ){
//   if( $outp != "" ) $outp .= ",";
//   $outp .= '{"Name":"'  . $rs["CompanyName"] . '",';
//   $outp .= '"City":"'   . $rs["City"]        . '",';
//   $outp .= '"Country":"'. $rs["Country"]     . '"}';
// }

// $outp ='{"records":['.$outp.']}';

// $conn->close();

// echo json_encode( $outp );

$users = [
  [
    'first_name' => 'Nate',
    'last_name'  => 'Bockoven',
    'title'      => 'Web Developer',
    'image'      => 'http://cdn.internationalstudent.com/images/bio-pictures/nate-bockoven.jpg',
  ],

  [
    'first_name' => 'Emil',
    'last_name'  => 'Galland',
    'title'      => 'Web Director',
    'image'      => 'http://cdn.internationalstudent.com/images/bio-pictures/emil-gallant.gif',
  ],

  [
    'first_name' => 'James',
    'last_name'  => 'Lewis',
    'title'      => 'Web Developer',
    'image'      => 'http://cdn.internationalstudent.com/images/bio-pictures/james-lewis.jpg',
  ],

  [
    'first_name' => 'Hranislov',
    'last_name'  => 'Ruzic',
    'title'      => 'Agent',
    'image'      => 'http://cdn.internationalstudent.com/images/bio-pictures/hranislov-ruzic.jpg',
  ],
];

echo json_encode( $users );
?>
