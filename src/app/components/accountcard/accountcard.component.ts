import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-accountcard',
  standalone: true,
  imports: [MatCardModule,FontAwesomeModule,MatIconModule],
  templateUrl: './accountcard.component.html',
  styleUrl: './accountcard.component.scss'
})
export class AccountcardComponent {
  faPlusCircle = faPlusCircle
}
