import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    title: 'Whales are the best',
    description: 'So long and thanks for all the fish',
    image: 'https://media.giphy.com/media/yoJC2A59OCZHs1LXvW/giphy.gif',
    author: 'John Doe',
    timestamp: new Date(),
    liked: false
  };
}
