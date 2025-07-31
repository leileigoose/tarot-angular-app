import { Component } from '@angular/core';
import { Cards } from "../components/cards/cards";

@Component({
  selector: 'app-home',
  imports: [Cards],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  
}
