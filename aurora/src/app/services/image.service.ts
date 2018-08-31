import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

export interface image {
  url:string;
}
@Injectable()
export class ImageService {

  private imgEndpoint:string = "http://aurorainsightsdev.azurewebsites.net/img/";
  
  constructor() { }
  public getImages():Observable<image[]>{
    return Observable.fromPromise(new Promise((resolve, reject)=>{
      resolve(this.fileNames.map((name)=>{
        return { url:`${this.imgEndpoint}${name}`}
      }));
    }));
     
  }
  private fileNames = [
    "Anatoly Mironov.png",
    "Anders Jehander.png",
    "Andreas Macsotay.jpg",
    "Ann-Kathrine Berner.jpg",
    "Axel King.jpg",
    "Björn Roberg.png",
    "Chetan Kolhari.jpg",
    "Dan Andersson.jpg",
    "Dan Saedén.png",
    "Daniel Lindén.png",
    "David Stenzelius.JPG",
    "David Wahlström.png",
    "Deepak Selvaraj.jpg",
    "Douglas Nilsson.png",
    "Emelie Schlyter.jpg",
    "Erdogan Ucan.jpg",
    "Erik Jehander.jpg",
    "Frida Hildingsson.png",
    "Girish Gowda.jpg",
    "Inge Nelson.jpg",
    "Joacim Gerdbo.jpg",
    "Joakim Liljeberg.png",
    "Joel Joelson.jpg",
    "Joel Pennegård.png",
    "Johan Jernström.jpg",
    "Johannes Ekstrand.png",
    "Johannes Milling.png",
    "Johannes Sörensen.png",
    "Jonathan Dogan.png",
    "Linnéa Henriksson.jpg",
    "Linus Karlsson.png",
    "Magnus Nilsson.PNG",
    "Malin Nilsson.png",
    "Marcus Etéus.png",
    "Maria Nyström.png",
    "Maria Stenfeldt Ramzell.png",
    "Martin Villyson.JPG",
    "Mathilda Olsson.jpg",
    "Mattias Breivald.jpg",
    "Mattias Jönsson.png",
    "Mattias Rydstav.png",
    "Niklas Velander.png",
    "Per Jansson.png",
    "Peter Abelsson.png",
    "Ramya Sudha.png",
    "Rebecka Merkel.png",
    "Sandra Ström.jpg",
    "Therese Nilsson.jpg",
    "Tobias Wettermark.jpg",
    "Victor Nyman.PNG",
    "Viktor Voigt.png",
    "collage.jpg",
    "celebs.jpg"
    ]
    
  

}
