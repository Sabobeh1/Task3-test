import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserModule } from './components/user.module';  // Import the UserModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),  // Add your routes here
    UserModule  // Import UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
