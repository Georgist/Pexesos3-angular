import {PexItem} from "../components/tiles/tiles.types";

export class pexItem implements PexItem {
  pairValue: string;
  id: number;
  imageUrl: string | string[];
  isActive: boolean;
  isVisited: boolean;
  isMatched: boolean;

  constructor(pairValue: string, id: number, imageUrl: string | string[], isActive = false, isVisited = false, isMatched = false) {
    this.pairValue = pairValue;
    this.id = id;
    this.imageUrl = imageUrl;
    this.isActive = isActive;
    this.isVisited = isVisited;
    this.isMatched = isMatched;
  }
}
