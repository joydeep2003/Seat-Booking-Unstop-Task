import { Component } from '@angular/core';
import { SeatService } from '../seat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-window',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-window.component.html',
  styleUrls: ['./booking-window.component.css']
})
export class BookingFormComponent {
  numSeats: number = 1;
  maxSeats: number = 7;
  bookedSeats: any[] = [];  // Store booked seats here
  
  constructor(private seatService: SeatService) {
  }

  bookSeats(): void {
    if (this.numSeats > this.maxSeats) {
      alert(`You can only book up to ${this.maxSeats} seats at a time.`);
    } else{
    const bookedSeats = this.seatService.bookSeats(this.numSeats);
    if (bookedSeats) {
      this.bookedSeats = bookedSeats;  // Store the booked seats
      alert(`Seats booked: ${bookedSeats.map(seat => seat.seat_id).join(', ')}`);
    } else {
      alert('Not enough seats available.');
    }
  }
  }
}
