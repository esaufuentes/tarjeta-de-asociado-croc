<script src="../librerias/bootstrap/js/bootstrap.js"></script>
<?php 

	require_once "../pacage/conexion.php";
	


 ?>
<div class="row">
	<div class="col-sm-12">
	<h2>EXPEDIENTE</h2>

			<tr>
				<td>Nombre</td>
				<td>Matricula</td>
				<td>Modalidad</td>
				<td>Documentos</td>
				<td>Fecha de Entrada</td>
				<td>Fecha de Salida</td>
				<td>Calificacion</td>
				<td>Editar</td>
				<td>Eliminar</td>
				<td>Reporte</td>
			</tr>

			<?php 

			foreach ($conn->query('SELECT * FROM person ORDER BY folio DESC LIMIT 1;') as $row){ // SE REALIZA LA CONSULTA . 

		
			 ?>

			<tr>
			<img id="foto" name="foto" src= "<?php echo $row['image']?>"," width = "150px" height = "150px"/>  
				<td><?php echo $row['image']?></td>
				<td><?php echo $row['folio']?></td>
				<td><?php echo $row['edad']?></td>
				<td><?php echo $row['direccion']?></td>
				<td><?php echo $row['telefono']?></td>
				<td><?php echo $row['cct']?></td>
				<td><?php echo $row['nss']?></td>
				<td><?php echo $row['rfc']?></td>
				<td><?php echo $row['curp']?></td>
				<td><?php echo $row['puesto']?></td>
				
				
			
				
				<td> 
					<button class="btn btn-warning glyphicon glyphicon-edit" onclick="agregaform('<?php echo $datos ?>')" data-toggle="modal" data-target="#modalEdicion">
						
					</button>
				</td>
				<td>


					<button class="btn btn-danger glyphicon glyphicon-remove" 
					onclick="preguntarSiNo('<?php echo $ver[0] ?>')">
				</td>

				<td> 
					<button class="btn btn-primary glyphicon glyphicon-download-alt" data-toggle="modal" data-target="">
						
					</button>
				</td>



			</tr>


			<?php 
		}
			 ?>
		</table>
	</div>
</div>