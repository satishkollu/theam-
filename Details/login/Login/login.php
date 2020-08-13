<?php
session_start();

$con = mysqli_connect('localhost','root');

mysqli_select_db($con,'portfolio');

$email = $_POST['email'];
$pass = $_POST['pass'];


$s = "select pass from data where email = '$email'";

$result = mysqli_query($con,$s);

if(mysqli_num_rows($result))
{
	$x=mysqli_fetch_assoc($result);
	
	if($x['pass']===$pass)
	{

       
      echo "You Log in Succesfull";
      
      
	}else{  echo "<script>alert('Wrong User');</script>";
	
}
}
else
{
    echo "<script>alert('Username or Password Is Incorrect');</script>";
    
}

?>