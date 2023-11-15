export interface PexItem {
  pairValue: string;
  id: number;
  imageUrl: string | string[];
  isFlipped: boolean;
  isVisited: boolean;
  isMatched: boolean;
}

export interface PexCurrentPair {
  pairValue: string | undefined; // TODO good approach?
  selector: HTMLElement;
}
