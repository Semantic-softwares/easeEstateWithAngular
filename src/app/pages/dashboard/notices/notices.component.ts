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
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum. Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.'
    },
    {
      id: 2,
      title: 'Scelerisque eleifend donec pretium vulputate sapien.',
      content: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis. Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum. Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.'
    },
    {
      id: 3,
      title: 'Consectetur purus ut faucibus pulvinar elementum.',
      content: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum. Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum. Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum. Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.'
    }
  ];

  selectedNotice = this.notices[0];

  changeSelectedNotice(notice: any) {
    this.selectedNotice = notice;
  }
}
