import { Component } from '@angular/core';
import { RouterOutlet,Router,NavigationStart } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidenavComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-finance';

  showMenu:boolean|undefined


  constructor(router:Router) {
    router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
            this.showMenu = (event.url !== "/") && 
            (event.url !== '/login') && 
            (event.url !== '/register') ;
        }
      
      });
    }
}
