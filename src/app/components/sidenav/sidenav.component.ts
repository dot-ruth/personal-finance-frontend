import { Component } from '@angular/core';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {
   faHome,
   faMoneyBill,
   faLineChart,
   faPieChart,
   faBarChart,
   faUser,
   faSignOut,
   } 
from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [ProfilePictureComponent,RouterOutlet,MatSidenavModule,FontAwesomeModule,MatIcon,RouterLink,MatListModule,RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  faHome = faHome;
  faMoneyBill = faMoneyBill;
  faLineChart = faLineChart;
  faPieChart = faPieChart;
  faBarChart = faBarChart;
  faUser = faUser;
  faSignOut = faSignOut;
  selectedItem:string | undefined;
  profile_url!: string;

  onNavigationClick(item: string) {
    this.selectedItem = item;
  }

  logout() {

  }

}
