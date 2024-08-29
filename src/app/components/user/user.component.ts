import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule]
})
export class UserComponent {
  @Input() user: any;
  @Input() onViewDetails!: (user: any) => void;

  viewDetails() {
    this.onViewDetails(this.user);
  }
}
