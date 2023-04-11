import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Employee } from '../profile.queries';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() data: Partial<Employee> = {};

  constructor() {}

  getHistory() {
    return this.data.history
  }
}
