import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PollInfo {
  id: number;
  date: string;
  description: string;
  status: string;
}

const Poll_DATA: PollInfo[] = [
  { id: 1, date: '2024-02-23', description: 'Important meeting at 10 AM', status: 'Active' },
  { id: 2, date: '2024-02-24', description: 'Submit quarterly report by EOD', status: 'Inactive' },
  { id: 3, date: '2024-02-25', description: 'Review new project proposal', status: 'Pending' },
  { id: 4, date: '2024-02-26', description: 'Training session on new software', status: 'Active' },
  { id: 5, date: '2024-02-27', description: 'Client presentation at 2 PM', status: 'Pending' },
  { id: 6, date: '2024-02-28', description: 'Team building event - Offsite', status: 'Active' },
  { id: 7, date: '2024-02-29', description: 'Deadline for project milestone', status: 'Inactive' },
  { id: 8, date: '2024-03-01', description: 'Monthly performance review', status: 'Pending' },
  { id: 9, date: '2024-03-02', description: 'Finalize budget for next quarter', status: 'Active' },
  { id: 10, date: '2024-03-03', description: 'Holiday - Office closed', status: 'Inactive' }
];

@Component({
  selector: 'app-polls',
  standalone: true,
      imports: [MatTableModule],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.scss'
})
export class PollsComponent {
 displayedColumns: string[] = ['id', 'date', 'description', 'status'];
  dataSource = Poll_DATA;

  constructor(private router: Router) {}

  navigateToNoticeDetail(id: number) {
    this.router.navigate(['/notices', id]);
  }
}
