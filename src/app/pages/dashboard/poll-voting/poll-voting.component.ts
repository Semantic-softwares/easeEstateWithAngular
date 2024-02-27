import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll-voting',
  standalone: true,
    imports: [MatTableModule, CommonModule],
  templateUrl: './poll-voting.component.html',
  styleUrl: './poll-voting.component.scss'
})

export class PollVotingComponent implements AfterViewInit {

  ngAfterViewInit() {
    const options = document.querySelectorAll('label');

    options.forEach((option, i) => {
      option.addEventListener("click", () => {
        options.forEach((opt, j) => {
          if (i === j) {
            opt.classList.add('selected');
          } else {
            opt.classList.remove('selected');
          }
          const percent = opt.querySelector('.percent') as HTMLElement;
          if (percent) percent.style.display = 'inline';
          const progress = opt.querySelector('.progress') as HTMLElement;
          if (progress) progress.style.display = 'block';
        });
      });
    });
  }

    pollId: string = "1";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pollId = params['pollId'];
    });
  }
}
