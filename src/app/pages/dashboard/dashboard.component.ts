import { Component } from '@angular/core';
import { AccountcardComponent } from '../../components/accountcard/accountcard.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AccountcardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
