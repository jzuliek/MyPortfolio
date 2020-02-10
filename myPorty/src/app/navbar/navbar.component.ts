import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
    
  activeItem: MenuItem;

    ngOnInit() {
        this.items = [
            {label: 'Uno', icon: 'fa fa-fw fa-bar-chart',routerLink:'project1'},
            {label: 'Dos', icon: 'fa fa-fw fa-calendar',routerLink:'p2'},
            {label: 'Tres', icon: 'fa fa-fw fa-book',routerLink:'p3'},
            {label: 'Quatro', icon: 'fa fa-fw fa-support',routerLink:'p4'},
            {label: 'Cinco', icon: 'fa fa-fw fa-twitter',routerLink:'p5'},
            {label: 'Seis', icon: 'fa fa-fw fa-twitter',routerLink:'p6'},
            {label: 'Siete', icon: 'fa fa-fw fa-twitter',routerLink:'p7'},
            {label: 'Ocho', icon: 'fa fa-fw fa-twitter', routerLink:'p8'},
        ];
        
        this.activeItem = this.items[2];
    }
}
