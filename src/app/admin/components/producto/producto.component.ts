import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/core/services/categoria.service';
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

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ProductoComponent implements OnInit {

  productDialog: boolean = false;

  products: Producto[] = [];
  categorias: any[] = [];

  product?: Producto;

  selectedProducts: Producto[] = [];

  submitted: boolean = true;

  statuses: any[] = [];

  totalRecords: number = 0;

  loading: boolean = false;
  displayModal: boolean = false;

  producto_id: number = -1;


  productoForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', [Validators.required]),
    precio: new FormControl(''),
    stock: new FormControl(''),
    descripcion: new FormControl(''),
    categoria_id: new FormControl(''),
  })

  constructor(private productService: ProductoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private categoriaService: CategoriaService) { }



  ngOnInit(): void {
    this.getProductos()
    this.getCategorias()
  }

  openNew() {
    this.product = { id: -1, nombre: '', stock: 0, descripcion: '', imagen: '', precio: 0 };
    this.submitted = false;
    this.productDialog = true;
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

  getCategorias() {
    this.categoriaService.listarCategorias().subscribe(
      (res: any) => {
        this.categorias = res

      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        // this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct(product: Producto) {
    this.product = { ...product };
    this.productDialog = true;
    console.log(product)

    this.productoForm = new FormGroup({
      id: new FormControl(product.id + ''),
      nombre: new FormControl(product.nombre, [Validators.required]),
      precio: new FormControl(product.precio + ''),
      stock: new FormControl(product.stock + ''),
      descripcion: new FormControl(product.descripcion + ''),
      categoria_id: new FormControl(product.categoria_id + ''),
    })

  }

  resetProductoForm() {
    this.productoForm = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl(''),
      stock: new FormControl(''),
      descripcion: new FormControl(''),
      categoria_id: new FormControl(''),
    })
  }

  deleteProduct(product: Producto) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.nombre + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        // this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.productoForm) {
      if (this.productoForm.value.id) {
        // this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      }
      else {
        // this.product.id = this.createId();
        // this.product.image = 'product-placeholder.svg';
        // this.products.push(this.product);
        this.productService.guardarProducto(this.productoForm.value).subscribe(
          (res: any) => {
            this.getProductos();
            this.resetProductoForm()
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
          },
          (error: any) => {
            console.log(error);
          }
        )
      }

      this.products = [...this.products];
      this.productDialog = false;
      // this.product = {};
    }
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

  showModalDialog() {
    this.displayModal = true;
  }

  modalSubirImagenProduct(prod: any) {
    this.producto_id = prod.id
    this.showModalDialog()
  }

  subirImagenServidor(event:any) {
    //event.files == files to upload
    let prod = this.producto_id
    console.log(event.files)
    let fd = new FormData();
    fd.append("imagen", event.files[0]);

    this.productService.subitImagenProducto(this.producto_id, fd).subscribe(
      (res: any) => {
        this.displayModal = false;
        this.getProductos()
      },
      (error: any) => {
        console.log(error)
      }
    )
}




}
