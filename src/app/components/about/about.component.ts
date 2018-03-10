import { Component, OnInit } from '@angular/core';
import {ImageapiService} from '../../services/imageapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  gettyImageUri: string;
  gettyResult: any;
  
  constructor(private imageApi: ImageapiService) { }

  ngOnInit() {
    this.imageApi.getGettyImages().subscribe(
    data => {this.gettyResult = data;
    this.gettyImageUri = this.gettyResult.images[0].display_sizes[0].uri;
    }
    );
  }
}

interface GettyResult{
  result_count: number;
  images: Image[];
}

interface Image {
  id: string;
  display_sizes: DisplaySize[];
}
interface DisplaySize {
  uri: string;
}