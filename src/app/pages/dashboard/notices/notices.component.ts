import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss'
})
export class NoticesComponent {
notices = [
    {
      id: 1,
      subject: 'Notice 1',
      imageUrl: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      subject: 'Notice 2',
      imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Scelerisque eleifend donec pretium vulputate sapien.',
      content: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.'
    },
    {
      id: 3,
      subject: 'Notice 3',
      imageUrl: 'https://images.unsplash.com/photo-1546074177-ffdda98d214f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Consectetur purus ut faucibus pulvinar elementum.',
      content: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.'
    }
  ];

  selectedNotice = this.notices[0]; // Initially select the first notice

  changeSelectedNotice(notice: any) {
    this.selectedNotice = notice;
  }
}
