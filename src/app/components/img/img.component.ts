import { Component, Input, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {

  @Input() src;
  constructor(
    public fetch: FetchService
  ) {
    if(this.src)
    this.src = this.src.splice('\\').join("/")
   }

  ngOnInit() {}

  imageError(event) {
    // Register the onerror event on the image in case of a 404
    let img = event.srcElement.shadowRoot.children[0];
    img.src = '/assets/images/no-image.png';
   }
}
