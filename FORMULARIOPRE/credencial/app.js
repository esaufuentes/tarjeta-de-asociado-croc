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
        let nss = document.getElementById('nss').value;
        
        
     

        generatePDF( folio,apellidos,edad, direccion, telefono,cct,razon, rfc,curp,puesto,nss);
    })

});

async function generatePDF(folio,apellidos,edad, direccion, telefono,cct,razon, rfc,curp,puesto,nss) {
    const image = await loadImage("FRENTE.jpg");
    const image2 = await loadImage("TRASERA.jpg");
    
    
    
  

    const pdf = new jsPDF('p','pt','a5');
    
 

    pdf.addImage(image, 'PNG', 0, 0,280, 170);
    
 

    

    pdf.addImage(foto,'JPG', 208, 58, 64, 75);


    
  
    
   



    
    pdf.setFontSize(7);
    
 
    pdf.text(folio, 220, 162);
    
    pdf.setFontSize(9).setFont(undefined, 'bold');
    pdf.text(apellidos, 30, 143);
    pdf.setFontSize(7);
    pdf.setTextColor(231,13,10);
    pdf.text(puesto, 70, 154);
    pdf.setTextColor(0,33,33);
   

    pdf.setFillColor(0,0,0);
    pdf.addPage('p','pt','a5');


    pdf.addImage(image2, 'PNG', 0, 0,280, 170);

    pdf.setFillColor(0,0,0);
    pdf.setTextColor(0,0,0);
    const date = new Date();
    pdf.text(date.getUTCDate().toString(), 120, 58);
    pdf.text((date.getUTCMonth() + 1).toString(), 133, 58);
    pdf.text(date.getUTCFullYear().toString(), 140, 58);


    pdf.text(razon, 05, 58);
    pdf.text(rfc, 200, 80);
   
    pdf.text(curp, 110, 80);
    pdf.text(nss, 215, 58);

  
    pdf.setFontSize(7);
    
    pdf.save( "CREDENCIAL"+" "+  apellidos +" "+ folio);

}