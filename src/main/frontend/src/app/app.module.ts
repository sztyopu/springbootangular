import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './components/login/login.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
