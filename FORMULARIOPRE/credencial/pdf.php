

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="jspdf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js"></script>
    <script src="app.js"></script>
   
    

</head>

<body>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-8 offset-md-2">
            <h3>FORMULARIO DE CREDENCIAL CROC</h3>
                <hr>
                
                
                <form id="form" method="POST" action="pacage/guardar.php" enctype="multipart/form-data">
                <?php

 
include("../pacage/conexion.php");
 

?>


<?php foreach ($conn->query('SELECT * FROM person ORDER BY folio DESC LIMIT 1;') as $row){ // SE REALIZA LA CONSULTA . ?> 



	

                    <div class="mb-3">
                        <label for="afiliado" class="form-label">AFILIADO</label>

                            
                        <div class="form-group">
                                <label class="col-sm-2 control-label">Seleccione una Foto</label>
                                <div class="col-sm-8">
                                <img id="foto" name="foto" src= "<?php echo $row['image']?>"," width = "150px" height = "150px"/>   <br />
                                    <output id="list"></output>
                                </div>
                                    <output id="list"></output>
                                </div>


                        
                        
                                              
                            <div class="mb-3">
                                <label for="folo" class="form-label" >FOLIO</label>
                                <input type="text" value= "<?php echo $row['folio']?>"  class="form-control" id="folio" readonly="readonly" >
                            </div>
                           

                         

                                                                    
                            <div class="row mb-3">

                                <div class="col-md-6">
                                    <label for="apellido" class="form-label" >NOMBRE COMPLETO</label>
                                    <input type="text"  name="apellido" value= "<?php echo $row['apellido']?>" class="form-control" id="apellido" readonly="readonly" >
                                </div>
                                <div class="col-md-6">
                                    <label for="edad" class="form-label" >EDAD</label>
                                    <input type="text" value= "<?php echo $row['edad']?>" name="edad" class="form-control" id="edad" readonly="readonly">
                                </div>
                            </div>



                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="direccion" class="form-label" >DIRECCION DE LA EMPRESA</label>
                                    <input type="text" value= "<?php echo $row['direccion']?>" name="direccion" class="form-control" id="direccion" readonly="readonly" >
                                </div>
                                <div class="col-md-6">
                                    <label for="telefono" class="form-label" >Telefono</label>
                                    <input type="text" value= "<?php echo $row['telefono']?>" name="telefono" class="form-control" id="telefono" readonly="readonly" >
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="cct" class="form-label" >CCT</label>
                                    <input type="text"  value= "<?php echo $row['cct']?>" name="cct" class="form-control" id="cct" readonly="readonly" >
                                </div>
                                <div class="col-md-6">
                                    <label for="razon" class="form-label" >HOTEL O RAZÓN SOCIAL</label>
                                    <input type="text" value= "<?php echo $row['razon']?>" name="razon" class="form-control" id="razon" readonly="readonly" >
                                </div>
                            </div>



                            <div class="mb-3">
                                <label for="nss" class="form-label" re>NSS</label>
                                <input type="text"  value= "<?php echo $row['nss']?>" name="nss" class="form-control" id="nss" readonly="readonly" >
                            </div>
                            <div class="mb-3">
                                <label for="rfc" class="form-label" >RFC</label>
                                <input type="text"  value= "<?php echo $row['rfc']?>" name="rfc" class="form-control" id="rfc" readonly="readonly">
                            </div>

                            <div class="mb-3">
                                <label for="curp" class="form-label" >CURP</label>
                                <input type="text"  value= "<?php echo $row['curp']?>" name="curp" class="form-control" id="curp" readonly="readonly" >
                            </div>
                            <div class="mb-3">
                                <label for="puesto" class="form-label" >PUESTO</label>
                                <input type="text"  value= "<?php echo $row['puesto']?>" name="puesto" class="form-control" id="puesto" readonly="readonly" >
                            </div>





                        </div>




                   
                      
                            
                        <div class="form-group">
                        

                            
                            <input type="submit"  value="DESCARGAR" name="enviar"  class="btn btn-success" >
                            
                
                           
                            <a class="btn btn-warning"   href="../index.html">NUEVO</a>


                            
                          </div>
                </form>
                
                <?php
     
	}
?>

                  </div>
                  
            </div>
        </div>
    <cdiv>

</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
    <script>





</html>