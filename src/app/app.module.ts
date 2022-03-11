import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard, MatCardModule } from '@angular/material/card';   
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ToggleComponent } from './toggle/toggle.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatChipsModule,
    MatSnackBarModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
