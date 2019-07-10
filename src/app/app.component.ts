import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Whales are just cool';
  image = 'https://media.giphy.com/media/yoJC2A59OCZHs1LXvW/giphy.gif';

  like = false;

  onLike() {
    this.like = !this.like;
  }
}
