function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;

window.addEventListener('load', async () => {

    const canvas = document.querySelector("canvas");
    
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
       
        
        let folio = document.getElementById('folio').value;
       
        
        let apellidos = document.getElementById('apellido').value;
        let edad = document.getElementById('edad').value;

       
        let direccion = document.getElementById('direccion').value;
        let telefono = document.getElementById('telefono').value;
        let cct = document.getElementById('cct').value;
        let razon = document.getElementById('razon').value;
      
        let rfc = document.getElementById('rfc').value;
        let curp = document.getElementById('curp').value;
        let puesto = document.getElementById('puesto').value;
        
        
     

        generatePDF( folio,apellidos,edad, direccion, telefono,cct,razon, rfc,curp,puesto);
    })

});

async function generatePDF(folio,apellidos,edad, direccion, telefono,cct,razon, rfc,curp,puesto) {
    const image = await loadImage("formulario.jpg");
    const image2 = await loadImage("formulario2.jpg");
    
    
    const signatureImage = signaturePad.toDataURL();
  

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    
 

    

    pdf.addImage(foto,'JPG', 480, 58, 63, 84);

    pdf.addImage(signatureImage, 'PNG', 140, 580, 300, 60);
  
    
   

    pdf.setFontSize(12);


    const date = new Date();
    pdf.text(date.getUTCDate().toString(), 239, 186);
    pdf.text((date.getUTCMonth() + 1).toString(), 270, 186);
    pdf.text(date.getUTCFullYear().toString(), 320, 186);

    pdf.setFontSize(10);
 
    pdf.text(folio, 490, 38);
 
    pdf.text(edad, 83, 367);
  
    pdf.text(apellidos, 90, 327);
    pdf.text(cct, 430, 110);
    pdf.text(razon, 50, 490);
    pdf.text(rfc, 70, 410);
    pdf.text(direccion, 93, 516);
    pdf.text(telefono, 336, 365);
    pdf.text(curp, 215, 410);
    pdf.text(puesto, 83, 548);
   

    pdf.setFillColor(0,0,0);
    pdf.addPage('p', 'pt', 'letter');

    pdf.addImage(image2, 'PNG', 0, 0, 565, 792);


    pdf.addImage(signatureImage, 'PNG', 140, 580, 300, 60);
    
    pdf.save(apellidos +" "+ folio +" "+ "CROC .pdf");

}