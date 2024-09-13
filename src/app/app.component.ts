import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookingFormComponent } from './booking-window/booking-window.component';
import { SeatLayoutComponent } from './seat-layout/seat-layout.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookingFormComponent,SeatLayoutComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppComponent {
  title = 'seat-booking';
}
