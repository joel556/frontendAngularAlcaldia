import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { PedidoService } from 'src/app/core/services/pedido.service';
import { ProductoService } from 'src/app/core/services/producto.service';
interface Producto {
  id: number,
  nombre: string,
  precio: number,
  stock: number,
  descripcion: string,
  imagen: string,
  categoria_id?: number
}

interface Cliente{
  id?:number,
  nombre_completo:string,
  ci_nit:string,
  telefono?:string
}

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.scss']
})
export class NuevoPedidoComponent implements OnInit {

   products: Producto[] = [];


  totalRecords: number = 0;

  loading: boolean = false;
  carrito: any[] = [];

  cliente: Cliente = {nombre_completo: '', ci_nit: ''};

  displayModalCliente: boolean = false;
  buscar: any = "";

  constructor(private productService: ProductoService,
              private clienteService:ClienteService,
              private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.getProductos()
  }

getProductos(page = 1) {
    this.loading = true
    this.productService.listarProductos(page).subscribe(
      (res: any) => {
        this.products = res.data
        this.totalRecords = res.total


      },
      (error: any) => {
        console.log(error)
      }
    )

    this.loading = false
  }

  loadProductos(event: LazyLoadEvent) {
    this.loading = true;
    console.log(event.first)
    let page: number | undefined = 1;
    let limit: number | undefined = 5;

    let pagina = event.first;
    let limite = event.rows;

    if (pagina && limite) {
      page = (pagina / limite) + 1;
      limit = limite
    }

    this.getProductos(page)

    this.loading = false;

  }

  seleccionarProduct(prod: any){
    console.log(prod)
    let producto = {
      producto_id: prod.id,
      nombre: prod.nombre,
      cantidad: 1,
      precio: prod.precio

    }
    let sw = 0;

    this.carrito
    for (let i = 0; i < this.carrito.length; i++) {
      const prod2 = this.carrito[i];
      if(prod2.producto_id == producto.producto_id){
        prod2.cantidad = prod2.cantidad + 1;
        sw=1;
      }      
    }
    if(sw==0){
      this.carrito.push(producto)
    }
  }

  quitarCarrito(prod: any){
    let pos = this.carrito.indexOf(prod);
    this.carrito.splice(pos, 1);
  }

   showModalDialogCliente() {
        this.displayModalCliente = true;
    }

    guardarCliente(){

      this.clienteService.guardarCliente(this.cliente).subscribe(
        (res: any) => {
          this.cliente = res.cliente;

          this.displayModalCliente = false
        },
        (error: any) => {
          console.log(error);
        }
      )


    }

    buscarCliente(){
      this.clienteService.listarCliente(this.buscar).subscribe(
        (res: any) => {
          this.cliente = res
        }
      )

    }

    guardarPedido() {
      let pedido = {
        cliente_id: this.cliente.id,
        productos: this.carrito
      }

      this.pedidoService.guardarPedido(pedido).subscribe(
        (res: any) => {
          console.log(res);
        }
      )
      
    }



}
