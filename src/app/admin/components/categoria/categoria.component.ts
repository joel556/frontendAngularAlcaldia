import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class CategoriaComponent implements OnInit {

  categoria_id: number = -1;
  categorias: any = [];
  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    detalle: new FormControl(''),
  })

  displayModalCategoria: boolean = false;

  constructor(private categoriaService: CategoriaService, private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.listaCategorias()
  }

  listaCategorias(){
    this.categoriaService.listarCategorias().subscribe(
      (res: any) => {
        this.categorias = res;
      },
      (error: any) => {
        console.log(error);
      }
    )

  }

  enviarCategoria(){
    if(this.categoria_id == -1){
      this.categoriaService.guardarCategoria(this.categoriaForm.value).subscribe(
        (res: any) => {
          this.listaCategorias()

          this.displayModalCategoria = false

          this.reset()
        },
        (error: any) => {
          console.log(error);
        }
      )

    }else{
      this.categoriaService.modificarCategoria(this.categoria_id, this.categoriaForm.value).subscribe(
        (res: any) => {
          this.categoria_id = -1

          this.listaCategorias()
          this.reset()

          this.displayModalCategoria = false
        },
        (error: any) => {
          console.log(error);
        }
      )
    }
    
  }

  editarCategoria(categoria:any){
    this.categoria_id = categoria.id

    this.displayModalCategoria = true
    


    this.categoriaForm = new FormGroup({
      nombre: new FormControl(categoria.categoria, [Validators.required]),
      detalle: new FormControl(categoria.detalle),
    })

  }

  reset(){
    this.categoriaForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      detalle: new FormControl(''),
    })

  }

  mostrarCategoria(){
    
  }

  actualizarCategoria(){

  }

  eliminarCategoria(categoria: any) {
    this.confirmationService.confirm({
        message: '¿Esta seguro de eliminar la categoria?',
        header: 'Eliminar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.categoriaService.eliminarCategoria(categoria.id).subscribe(
            (res:any) => {
              this.messageService.add({severity:'info', summary:'Eliminado', detail:'categoria eliminada'});
              this.listaCategorias()
            },
            (error:any) => {
              this.messageService.add({severity:'error', summary:'Error', detail:'Error al eliminar la categoria'});
            }
          )
        },
        reject: (type: any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Error', detail:'A ocurrido un Error'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelado', detail:'Se cancelo'});
                break;
            }
        }
    });
}

  showModalDialogCategoria() {
        this.displayModalCategoria = true;
    }

}
