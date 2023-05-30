import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/core/services/pedido.service';

// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas'; // Todavía no lo usamos

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.scss']
})
export class ListaPedidoComponent implements OnInit {

  pedidos:any[] = []
  productos: any[] = []

  displayModal: boolean = false;


    showModalDialog(pedido: any) {
      this.productos = pedido.productos;
        this.displayModal = true;
    }


  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.listarPedidos()
  }

  listarPedidos(){
    this.pedidoService.listarPedido().subscribe(
      (res: any) => {
        this.pedidos = res
      }
    )

  }

  public downloadPDF(): void {
    // const doc = new jsPDF();

    // doc.text('Hola Mundo!', 10, 10);
    // doc.save('hola.pdf');
  }

}
