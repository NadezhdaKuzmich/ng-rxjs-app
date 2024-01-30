import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataBaseService } from './data-base.service';

@NgModule({
  declarations: [AppComponent, PostsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataBaseService, { passThruUnknownUrl: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
