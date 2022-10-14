import { MouseEventHandler, KeyboardEventHandler } from "react";

export interface IData {
  position: number;
  category: string;
  name: string;
  art: string;
  epocsid: boolean;
  epocsidColor: string;
  woodType: string;
  woodColor: string;
  price: number;
  freeShipping: boolean;
  image: string;
  date: string;
  like: number;
}

export interface ICharacter {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
}
export interface ICharacterNew {
  position: number;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
}
export interface ICharacterMod {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
  cbCloseModal: MouseEventHandler<HTMLElement>; 
}

export interface ISearch {
  cbSearch(data: ICharacter[]): void;
} 