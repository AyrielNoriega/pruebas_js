var doc = new jsPDF({
    oritentation: 'landscape',
    unit: "in",
    //format: [4, 2]
});
var elementHTML = $('#content').html();

console.log(elementHTML);

doc.setFont("courier");
doc.setFontType("normal");
doc.setFontSize(8);

var specialElementHandlers = {
    '#elementH': function (element, renderer) {
        return true;
    }
};

doc.fromHTML(elementHTML, 5, 5, { //elementHTML, margin izquierdo, margen superior
   // 'width': 150,
  //  'elementHandlers': specialElementHandlers
  'setFontSize': 8,
  'setFontType': 'normal'
});

console.log(doc);


var boton = document.getElementById('enviar');
var contenido = document.getElementById('table');

boton.addEventListener('click', function (e) {
    console.log('enviarndo');

    var document = doc.save('Test.pdf');
    console.log(document);
});

// https://programacion.net/articulo/convertir_de_html_a_pdf_utilizando_javascript_2122
// https://parall.ax/products/jspdf