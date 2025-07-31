import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CardResponse } from '../model/cards.type';
import { finalize } from 'rxjs';
import { LoadingService } from './loading-service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  http = inject(HttpClient);

  constructor(private loadingService: LoadingService) {}
  
  getCardFromApi(question: string | null = null) {
    const url = 'https://tarot-python-backend.onrender.com/draw-card';
    // const url = 'http://localhost:8000/draw-card'; // For local development
    return this.http.post<CardResponse>(url, { question }).pipe(
      finalize(() => this.loadingService.setLoading(false))
    );
  }
}
