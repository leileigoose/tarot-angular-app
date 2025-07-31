export type CardOrientation = 'upright' | 'reversed';

export type Card ={
    card_no: number;
    name: string;
    orientation: CardOrientation; 
    meaning: string;
}

export type CardResponse = {
    card: Card;
    summary: string;
}