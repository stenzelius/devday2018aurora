import { Component, OnInit } from '@angular/core';
import {CognitiveService} from '../../services/cognitive-service.service';
import {ImageService, image} from '../../services/image.service';
import { Observable } from 'rxjs/Observable';
export interface imageData {
  caption?:string;
  url?:string;
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

  public imageData:any;

  ngOnInit() {
    this.images = this._imageService.getImages();
  }

  getImageData(imageUrl){
    this._congitiveService.GetVision(imageUrl).subscribe((visionResult)=>{
      var visionResult = JSON.parse(visionResult._body);
      this._congitiveService.GetVision(imageUrl).subscribe((faceResult)=>{
        
        var faceResult = JSON.parse(faceResult._body);
        var url = imageUrl;
        this.imageData = {
          url:imageUrl,
          caption:visionResult.description.captions[0].text
        }
      
      });

      

    })
  }

}
