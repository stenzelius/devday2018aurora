import { Component, OnInit } from '@angular/core';
import {CognitiveService} from '../../services/cognitive-service.service';
import {ImageService, image} from '../../services/image.service';
import { Observable } from 'rxjs/Observable';
export interface imageData {
  caption?:string;
  url?:string;
  age?:number;
  smile?:number;
  tags?:string[];
  
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {

  constructor(public _congitiveService:CognitiveService, public _imageService: ImageService) { }
  private imgEndpoint:string = "http://aurorainsightsdev.azurewebsites.net/img/";
  public images:Observable<image[]>;
  private loading=false;
  public imageData:any;

  ngOnInit() {
    this.images = this._imageService.getImages();
  }

  getImageData(imageUrl){
    this.loading=true;
    console.log(imageUrl);
    this._congitiveService.GetVision(imageUrl).subscribe((visionResult)=>{
      var visionResult = JSON.parse(visionResult._body);
      this._congitiveService.GetFace(imageUrl).subscribe((faceResult)=>{
        
        var faceResult = JSON.parse(faceResult._body);
        var url = imageUrl;
        this.imageData = {
          url:imageUrl,
          caption:visionResult.description.captions[0].text,
          //age:this.getAge(faceResult[0].faceAttributes.age),
          //smile:this.getSmiley(faceResult[0].faceAttributes.smile),
          tags:visionResult.description.tags
        }
        var face = faceResult[0] ? faceResult[0].faceAttributes : undefined;
        if (face) {
          this.imageData.age = this.getAge(face.age);
          this.imageData.smile = this.getSmiley(face.smile);
        }
        else {
          this.imageData.faceNotDetected = true;
        }
        this.loading=false;
      
      });

      

    })
  }

  getSmiley(num) {
    num = Math.round(num*10);
    return ["🤕", "😨", "😄", "😅", "😆", "😉", "😊", "😋","😀", "😁", "😂" ][num];
  }

  getAge(age) {
    return age > 30 ? "👵🏻" : "👶🏻";
  }

}
