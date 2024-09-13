import { Injectable } from '@angular/core';
import { Seat } from './models/seat.model';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  private seats: Seat[][] = [];

  constructor() {
    this.initializeSeats();
  }

  // Initialize the seats in rows
  private initializeSeats() {
    let seatId = 1;
    for (let row = 1; row <= 11; row++) {
      const rowSeats: Seat[] = [];
      for (let i = 0; i < 7; i++) {
        rowSeats.push({ seat_id: seatId++, row, is_booked: false });
      }
      this.seats.push(rowSeats);
    }
    this.seats.push([{ seat_id: 78, row: 12, is_booked: false }, { seat_id: 79, row: 12, is_booked: false }, { seat_id: 80, row: 12, is_booked: false }]); // Last row with 3 seats
  }

  // Get all seats
  getSeats(): Seat[][] {
    return this.seats;
  }

  // Check seat availability in one row
  checkRowAvailability(row: Seat[], numSeats: number): Seat[] | null {
    const availableSeats = row.filter((seat) => !seat.is_booked);
    if (availableSeats.length >= numSeats) {
      return availableSeats.slice(0, numSeats);
    }
    return null;
  }

  // Find nearby seats across rows if a row does not have enough
  findNearbySeats(numSeats: number): Seat[] | null {
    let availableSeats: Seat[] = [];
    for (let row of this.seats) {
      availableSeats = [...availableSeats, ...row.filter((seat) => !seat.is_booked)];
      if (availableSeats.length >= numSeats) {
        return availableSeats.slice(0, numSeats);
      }
    }
    return null;
  }

  // Book seats for the user
  bookSeats(numSeats: number): Seat[] | null {
    for (let row of this.seats) {
      const availableInRow = this.checkRowAvailability(row, numSeats);
      if (availableInRow) {
        availableInRow.forEach((seat) => (seat.is_booked = true));
        return availableInRow;
      }
    }

    const nearbySeats = this.findNearbySeats(numSeats);
    if (nearbySeats) {
      nearbySeats.forEach((seat) => (seat.is_booked = true));
      return nearbySeats;
    }

    return null;
  }
}
