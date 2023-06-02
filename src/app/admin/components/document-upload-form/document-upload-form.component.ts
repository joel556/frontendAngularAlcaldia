// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-document-upload-form',
//   templateUrl: './document-upload-form.component.html',
//   styleUrls: ['./document-upload-form.component.scss']
// })
// export class DocumentUploadFormComponent implements OnInit {
//   documentForm: FormGroup;

//   constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

//   ngOnInit() {
//     this.documentForm = this.formBuilder.group({
//       document: ['', Validators.required]
//     });
//   }

//   handleFileChange(event: any) {
//     const file = event.target.files[0];
//     // Aquí puedes realizar cualquier lógica adicional para manejar la selección del archivo
//   }

//   submitForm() {
//     if (this.documentForm.valid) {
//       const formData = new FormData();
//       formData.append('archivo', this.documentForm.value.document);
  
//       this.http.post('http://localhost', formData).subscribe(
//         () => {
//           // Aquí puedes manejar la respuesta de éxito del servidor
//           console.log('Documento subido exitosamente.');
//         },
//         (error) => {
//           // Aquí puedes manejar el error del servidor
//           console.error('Error al subir el documento:', error);
//         }
//       );
//     }
//   }
// }