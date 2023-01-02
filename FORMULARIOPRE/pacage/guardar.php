<html>
<body>
    <?php

include("conexion.php");

  
   
    $edad=$_POST['edad'];
    $apellido=$_POST['apellido'];
    $direccion=$_POST['direccion'];
    $telefono=$_POST['telefono'];
    $cct=$_POST['cct'];
    $razon=$_POST['razon'];
    $nss=$_POST['nss'];
    $puesto=$_POST['puesto'];
    $rfc=$_POST['rfc'];
    $curp=$_POST['curp'];
    $uploadDir='../fotos/';
    $fileName=$_FILES['foto']['name'];
    $tmpName=$_FILES['foto']['tmp_name'];
    $url=$uploadDir.$fileName;
    move_uploaded_file($tmpName,$url);
   

    $sql="INSERT INTO person
                (edad,direccion,telefono,apellido,nss,puesto,rfc,cct,razon,curp,image) 
                VALUES('$edad','$direccion','$telefono','$apellido','$nss','$puesto','$rfc','$cct','$razon','$curp','$url')";
    
   


        if (mysqli_query($conn, $sql)) {
         header("location:../pdf/pdf.php");
         return;
        } else {
           echo "Error: " . $sql . "" . mysqli_error($conn);
        }
        $conn->close();
   


?>

      </body>
</html>