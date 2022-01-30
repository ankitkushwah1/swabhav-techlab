import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  public hidden = true;
  public hiddenH1 = true;
  public hideImg = true;
  public imgSrc = '';
  public random_image = [
    'https://images.unsplash.com/photo-1639035197300-a03f3bd3fad2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzOTYzNTQzNw&ixlib=rb-1.2.1&q=80&w=200',
    'https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://wallpaperaccess.com/full/1204259.jpg',
    'https://wallpapercave.com/wp/wp2634222.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWt1srC9XggJkmhVCB3N186_v_943C_RqqMBzr8vBPXazb_Ix8REKTDzw15Uxj2oyhF0&usqp=CAU',
    'https://www.lifewire.com/thmb/sBTTdVbzhERHQvozM94KDsJjK0I=/1280x800/filters:no_upscale():max_bytes(150000):strip_icc()/vladstudio-library-wallpaper-5919cd763df78cf5fa3d7e27.jpg',
    'https://c4.wallpaperflare.com/wallpaper/553/119/620/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg',
  ];
  constructor() {}
  clickHandler(e: any, box: any, image: any) {
    console.log(e);

    this.imgSrc = e.target.currentSrc;
    this.hidden = false;
    this.hideImg = false;
    this.hiddenH1 = true;
  }
  clearHandler(event: any, image: any) {
    console.log(event);
    image.src = '';
    this.hiddenH1 = false;
    this.hideImg = true;
  }
  ngOnInit(): void {}
}
