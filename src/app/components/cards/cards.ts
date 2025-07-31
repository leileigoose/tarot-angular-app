import { Component, effect, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../services/cards-service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})


export class Cards {

  displayText: string = '';
  card_no: number = 0;
  name: string = ''; 
  orientation: string = '';
  meaning: string = '';

  constructor(private cardService: CardsService) {}
  
  pullCard(): void {
    const questionInput = document.getElementById('question') as HTMLInputElement;
    const question = questionInput.value;

    this.cardService.getCardFromApi(question).subscribe({ 
      next: (response) => {
        console.log('Card data fetched successfully:', response);
        this.card_no = response.card.card_no;
        this.name = response.card.name; 
        this.orientation = response.card.orientation;
        this.meaning = response.card.meaning;
        
        if (!response.summary) {
          this.displayText = 'No Answer';
        } else {
          this.displayText = response.summary;
        }
      },
      error: (error) => {
        console.error('Error fetching card data:', error);
        this.displayText = 'Error fetching card data';
      }
    });
  }
}
