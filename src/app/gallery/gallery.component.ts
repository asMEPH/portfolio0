import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {

  @Input() buttons: Array<string> ;
  @Input() galleryList: Array<any> ;

  selected = -1;

  images = [
    ['https://cdn.polscygracze.pl/uploads/2018/04/evelynn_-768x453.jpg',
    'https://i.pinimg.com/originals/52/08/a9/5208a9b07bddcf7e0567efe9593c3303.jpg',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uxWHBX74QCV4pD1hoX93EgHaEV%26pid%3DApi&f=1'
    ],
    ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*rwxsJi-EQ9EC9XL1bgg04g.jpeg&f=1&nofb=1'],
    ['https://thumbs.gfycat.com/BlondIcyBasilisk-size_restricted.gif']
  ]


  constructor() { }

  changeGallery(i){
    this.selected = i;

  }

  ngOnInit() {
  }

}
