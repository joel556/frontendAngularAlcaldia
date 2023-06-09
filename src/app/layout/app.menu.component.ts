import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'ADMINISTRACION',
                items: [
                    { label: 'Perfil', icon: 'pi pi-fw pi-home', routerLink: ['/admin/perfil'] }
                ]
            },
            {
                label: 'Gestión de RR. HH.',
                items: [
                    { label: 'Puestos de Trabajo', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/categoria'] },
                    { label: 'Personal', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/producto'] },
                ]
            },
            {
                label: 'Usuarios',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/usuario'], badge: 'NEW' },
                    { label: 'Agendar Cita ', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/calendario'], target: '_blank' },
                ]
            },
            {
                label: 'Tramites',
                items: [
                    { label: 'Tramites', icon: 'pi pi-fw pi-prime', routerLink: ['/admin/pedido'] },
                    { label: 'Nuevo Tramite', icon: 'pi pi-fw pi-desktop', routerLink: ['/admin/pedido/nuevo'] },
                ]
            },
            {
                label: 'Paginas GAMP',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Facebook',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['https://www.facebook.com/CiudadIntermedia/']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    // {
                    //     label: 'Crud',
                    //     icon: 'pi pi-fw pi-pencil',
                    //     routerLink: ['/pages/crud']
                    // },
                    // {
                    //     label: 'Timeline',
                    //     icon: 'pi pi-fw pi-calendar',
                    //     routerLink: ['/pages/timeline']
                    // },
                    // {
                    //     label: 'Not Found',
                    //     icon: 'pi pi-fw pi-exclamation-circle',
                    //     routerLink: ['/notfound']
                    // },
                    // {
                    //     label: 'Empty',
                    //     icon: 'pi pi-fw pi-circle-off',
                    //     routerLink: ['/pages/empty']
                    // },
                ]
            },
            {
                label: 'Documentacion',
                items: [
                    {
                        label: 'Documentación', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Tramites Vehiculares', icon: 'pi pi-fw pi-bookmark', 
                                items: [
                                    { label: 'Vehiculos', icon: 'pi pi-fw pi-bookmark',  },
                                 
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Tramites de Inmuehebles', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'impuestos Vehiculares', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Impuestos', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Mediciones', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-question', URL: ['https://www.facebook.com/CiudadIntermedia/']
                    },
                    {
                        label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://www.facebook.com/CiudadIntermedia/'], target: '_blank'
                    }
                ]
            }
        ];
    }
}
