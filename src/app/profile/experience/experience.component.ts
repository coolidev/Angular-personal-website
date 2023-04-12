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

  getDuration(duration: any) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let durationString = '';
    if (duration.from !== undefined) {
      const fromDate = new Date(duration.from)
      durationString = durationString + `${monthNames[fromDate.getMonth()]}, ${fromDate.getFullYear()} ~ `
    }
    if (duration.to !== undefined) {
      const endDate = new Date(duration.to)
      durationString = durationString + `${monthNames[endDate.getMonth()]}, ${endDate.getFullYear()}`
    } else {
      durationString = durationString + "Present"
    }
    return durationString
  }
}
