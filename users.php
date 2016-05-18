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
    'id'         => 1,
    'first_name' => 'Nate',
    'last_name'  => 'Bockoven',
    'title'      => 'Web Developer',
    'image'      => 'http://cdn.internationalstudent.com/images/bio-pictures/nate-bockoven.jpg',

  ],

  [
    'id'         => 2,
    'first_name' => 'Emil',
    'last_name'  => 'Gallant',
    'title'      => 'Web Director',
    'image'      => 'http://cdn.internationalstudent.com/images/bio-pictures/emil-gallant.gif',
    'bio'        => 'Emil joined EIC in 2006 as the Director of Technology. Previous to that, he had
                     worked in Silicon Valley for over 15 years for some of the biggest software and
                     hardware companies in the world, including Borland International, Apple,
                     Motorola, and Novell. His job at EIC consists of developing robust web server
                     applications, designing new websites and using the latest technology to enhance
                     the online presence of EIC.',
  ],

  [
    'id'         => 3,
    'first_name' => 'James',
    'last_name'  => 'Lewis',
    'title'      => 'Web Developer',
    'image'      => 'http://cdn.internationalstudent.com/images/bio-pictures/james-lewis.jpg',
  ],

  [
    'id'         => 4,
    'first_name' => 'Hranislov',
    'last_name'  => 'Ruzic',
    'title'      => 'Agent',
    'image'      => 'http://cdn.internationalstudent.com/images/bio-pictures/hranislov-ruzic.jpg',
    'bio'        => 'Hranislav joined EIC in early 2016. Originally from Serbia, he grew up in
                     Columbus, Ohio and graduated from The Ohio State University with a Bachelor\'s
                     degree in International Studies. Hranislav has extensive experience traveling
                     across both Europe and Asia and was drawn to Envisage because of their work
                     with international students and universities.'
  ]
];

echo json_encode( $users );
?>
