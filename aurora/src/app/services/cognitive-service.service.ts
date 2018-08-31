import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class CognitiveService {
  constructor(private _http: Http) { }
  private imgEndpoint:string = "http://aurorainsightsdev.azurewebsites.net/img/";
  private cognitiveEndPoint:string = "https://westeurope.api.cognitive.microsoft.com/vision/v1.0";
  private subscriptionKey1:string = "6581582250924e238d68d8772a3280a9"
  private subscriptionKey2:string = "ae70019559f146759708a537ea6322c2"

  
  public GetVision(imgUrl:string):Observable<any> {
    var headers = new Headers();
    headers.append('Ocp-Apim-Subscription-Key',this.subscriptionKey1);
    headers.append('Content-Type', 'application/json');

    headers.append('Accept', 'application/json');
    

  // var imgUrl ="https://c1.staticflickr.com/4/3704/10853982094_c04138c2d4_b.jpg";
    var reqUri =`${this.cognitiveEndPoint}/analyze?visualFeatures=Categories,Description&details=Landmarks&language=en`;
    return this._http.post(reqUri, {url:imgUrl },
      { headers:headers}
    );

  }

  public GetFace(imgUrl:string):Observable<any> {
    var headers = new Headers();
    headers.append('Ocp-Apim-Subscription-Key',this.subscriptionKey1);
    headers.append('Content-Type', 'application/json');

    headers.append('Accept', 'application/json');
    var reqUri =`${this.cognitiveEndPoint}/analyze?visualFeatures=Categories,Description&details=Landmarks&language=en`;
    return this._http.post(reqUri, {url:imgUrl },
      { headers:headers}
    );

  }

}
