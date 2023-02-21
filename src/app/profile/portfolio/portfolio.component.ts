import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  config: any;
  portfolioList: any = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.portfolioList = this.profileService.getPortfolioList();
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.portfolioList.length,
    };
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }
}
