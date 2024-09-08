// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { UserModule } from './app/user/user.module';  // Import the UserModule
import { routes } from './app/app.routes';  // Import routes

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    UserModule  // Import UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
