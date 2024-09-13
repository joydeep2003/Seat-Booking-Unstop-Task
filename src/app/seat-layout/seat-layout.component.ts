import { Component, OnInit } from '@angular/core';
import { SeatService } from '../seat.service';
import { Seat } from '../models/seat.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-seat-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-layout.component.html',
  styleUrl: './seat-layout.component.css'
})
export class SeatLayoutComponent implements OnInit {
  seats: Seat[][] = [];

  constructor(private seatService: SeatService) {}

  ngOnInit(): void {
    this.seats = this.seatService.getSeats();
  }
}
