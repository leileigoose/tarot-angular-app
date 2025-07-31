import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CardResponse } from '../model/cards.type';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  http = inject(HttpClient);

  getCardFromApi(question: string | null = null) {
    const url = 'https://tarot-python-backend.onrender.com/draw-card';
    return this.http.post<CardResponse>(url, { question });
  }
}
