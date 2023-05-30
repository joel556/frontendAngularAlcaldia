import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-duplicado',
  templateUrl: './duplicado.component.html',
  styleUrls: ['./duplicado.component.scss']
})
export class DuplicadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  }

  generatePDF() {
    const contentElement = document.getElementById('contidoPrincipal');
    if (contentElement) {
      const content = this.convertHtmlToPdfMakeContent(contentElement.innerHTML);

      const documentDefinition = {
        content: [
          { text: 'Requisitos para el tramite de: DUPLICADO DE PLACA', style: 'header' },
          { text: 'Gobierno Autonomo Municipal de Patacamaya' },
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

  convertHtmlToPdfMakeContent(html: string): any {
    const processedContent = [];
    processedContent.push({ image: 'assets/demo/images/patacamaya/logo.jpg', width: 200 });
  
    // Agregar el título del documento
    processedContent.push({ image: 'http://localhost/images/logo.jpg', width: 200 });

  
    // Procesar y formatear el contenido HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const sections = doc.querySelectorAll('section');
  
    sections.forEach((section) => {
      const title = section.querySelector('h3');
      const description = section.querySelector('p');
  
      if (title && description) {
        processedContent.push({ text: title.textContent, style: 'subheader' });
        processedContent.push({ text: description.textContent });
      }
    });
  
    // Devolver el contenido procesado
    return processedContent;
  }
  
}
