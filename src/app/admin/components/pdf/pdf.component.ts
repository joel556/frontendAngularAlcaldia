import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  }

  generatePDF() {
    const contentElement = document.getElementById('contidoPrincipal');
    if (contentElement) {
      const content = contentElement.innerHTML;

      const documentDefinition = {
        content: [
          { text: 'Hola, este es un archivo PDF generado desde Angular.', style: 'header' },
          { text: 'Puedes personalizar el contenido del PDF aquí.' },
          { text: content }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            marginBottom: 20
          }
        }
      };

      pdfMake.createPdf(documentDefinition).open();
    }
  }
}
