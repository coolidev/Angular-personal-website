import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Employee } from '../profile.queries';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnChanges {
  config: any;
  imageUrl: any;

  @Input() data: Partial<Employee> = {}

  constructor(private profileService: ProfileService) {
    this.imageUrl = this.profileService.imageUrl
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setConfig(changes["data"].currentValue);
  }

  setConfig(change: Partial<Employee>) {
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: change.projects?.length
    }
  }

  getPortfolioData(): any {
    return this.data.projects;
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }
}
