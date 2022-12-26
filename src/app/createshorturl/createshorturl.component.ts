import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-createshorturl',
  templateUrl: './createshorturl.component.html',
  styleUrls: ['./createshorturl.component.css']
})
export class CreateshorturlComponent  implements OnInit{

  data :any = [{title: 'test'}]
  title : any;
  url : any;
  response :any;
  shorturl:boolean = false

  constructor(private api:ApiService){
    this.url = {id : -1, longurl : '', shorturl : '' };

  }
  createShorturl = () => {
    this.api.postlongurl(this.url).subscribe(
        Response=>{
          this.data.push(Response);
          this.response = Response
          this.shorturl = true
        },
        err => {
          alert(`Invalid url format
OR
url is already used`)
        }
    )

  };

  ngOnInit(): void {

  }
}
