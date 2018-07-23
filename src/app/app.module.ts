import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Filter1Pipe } from './filter1.pipe';
import { GitHubUsersComponent } from './components/git-hub-users/git-hub-users.component';

@NgModule({
  declarations: [
    AppComponent,
    Filter1Pipe,
    GitHubUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
