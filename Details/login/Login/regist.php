<?php

$con = mysqli_connect('localhost','root');

if($con)
{
	echo "Wow! You Success Fully Register Log In Now";
}
else{
	echo "Connection Fail";
}

mysqli_select_db($con,'portfolio');

$name = $_POST['name'];
$email = $_POST['email'];
$pass = $_POST['pass'];

$query = "insert into data (name,email,pass) values ('$name','$email','$pass')";

mysqli_query($con,$query);


  ?>