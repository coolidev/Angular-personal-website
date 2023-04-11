import { Component, OnInit } from '@angular/core';
import { Employee } from './profile.queries';
import { ProfileService } from './profile.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private data: Partial<Employee> = {};

  constructor(private profileService: ProfileService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.spinner.show();
    this.profileService.getUserInfo().subscribe((data) => {
      this.spinner.hide();
      this.data = data[0]
    })
  }

  getIntroData(): Partial<Employee> {
    return {
      name: this.data.name,
      subtitle: this.data.subtitle,
      contactInfo: this.data.contactInfo,
      avatar: this.data.avatar,
      background: this.data.background
    }
  }

  getAboutData(): Partial<Employee> {
    return {
      name: this.data.name,
      contactInfo: this.data.contactInfo,
      summary: this.data.summary
    }
  }

  getSkills(): Partial<Employee> {
    return {
      skills: this.data.skills
    }
  }

  getPortfolioData(): Partial<Employee> {
    return {
      projects: this.data.projects
    }
  }

  getHistory(): Partial<Employee> {
    return {
      history: this.data.history
    }
  }

  getContactInfo(): Partial<Employee> {
    return {
      contactInfo: this.data.contactInfo
    }
  }
}
