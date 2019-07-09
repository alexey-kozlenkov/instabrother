import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './photo-post/post.component';
import { ImgZoomDirective } from './photo-post/zoom.directive';

@NgModule({
  declarations: [AppComponent, PostComponent, ImgZoomDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
