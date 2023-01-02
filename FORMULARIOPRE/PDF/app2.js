
window.addEventListener('load', async () => {

    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

 

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        
        let folio = document.getElementById('folio').value;
        let nombres = document.getElementById('nombre').value;
        
        let apellidos = document.getElementById('apellido').value;
        let edad = document.getElementById('edad').value;

       
        let direccion = document.getElementById('direccion').value;
        let telefono = document.getElementById('telefono').value;
        let cct = document.getElementById('cct').value;
        let razon = document.getElementById('razon').value;
      
        let rfc = document.getElementById('rfc').value;
        let curp = document.getElementById('curp').value;
        let puesto = document.getElementById('puesto').value;
        
        
     

        generatePDF( folio,nombres,apellidos,edad, direccion, telefono,cct,razon, rfc,curp,puesto);
    })

});

async function generatePDF(folio, nombres,apellidos,edad, direccion, telefono,cct,razon, rfc,curp,puesto) {
    const image = await loadImage("FRENTE.jpg");
    const image2 = await loadImage("TRASERA.jpg");
    
    
  

    const pdf2 = new jsPDF('p', 'pt', 'letter');

    pdf2.addImage(image, 'PNG', 0, 0, 565, 792);
    
 

    

    pdf2.addImage(foto,'JPG', 480, 58, 63, 84);

 
  
    
   

    pdf2.setFontSize(12);


    const date = new Date();
    pdf2.text(date.getUTCDate().toString(), 239, 186);
    pdf2.text((date.getUTCMonth() + 1).toString(), 270, 186);
    pdf2.text(date.getUTCFullYear().toString(), 320, 186);

    pdf2.setFontSize(10);
 
    pdf2.text(folio, 490, 38);
    pdf2.text(nombres, 323, 327);
    pdf2.text(edad, 83, 367);
  
    pdf2.text(apellidos, 90, 327);
    pdf2.text(cct, 430, 110);
    pdf2.text(razon, 50, 490);
    pdf2.text(rfc, 70, 410);
    pdf2.text(direccion, 93, 516);
    pdf2.text(telefono, 336, 365);
    pdf2.text(curp, 215, 410);
    pdf2.text(puesto, 83, 548);
   

    pdf2.setFillColor(0,0,0);
    pdf2.addPage('p', 'pt', 'letter');

    pdf2.addImage(image2, 'PNG', 0, 0, 565, 792);

    pdf2.addImage(foto,'JPG', 480, 58, 63, 84);


    pdf2.save(nombres +" "+ apellidos +" "+ folio +" "+ "CREDENCIAL.pdf");

}