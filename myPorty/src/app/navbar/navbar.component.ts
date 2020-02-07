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
            {label: 'Uno', icon: 'fa fa-fw fa-bar-chart',routerLink:'projects'},
            {label: 'Dos', icon: 'fa fa-fw fa-calendar',routerLink:'landing'},
            {label: 'Tres', icon: 'fa fa-fw fa-book',routerLink:'projects'},
            {label: 'Quatro', icon: 'fa fa-fw fa-support',routerLink:'landing'},
            {label: 'Cinco', icon: 'fa fa-fw fa-twitter',routerLink:'projects'},
            {label: 'Seis', icon: 'fa fa-fw fa-twitter',routerLink:'landing'},
            {label: 'Siete', icon: 'fa fa-fw fa-twitter',routerLink:'projects'},
            {label: 'Ocho', icon: 'fa fa-fw fa-twitter', routerLink:'landing'},
        ];
        
        this.activeItem = this.items[2];
    }
}
