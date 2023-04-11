import { Component, Input } from '@angular/core';
import { Employee } from '../profile.queries';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  imageUrl: any;

  @Input() data: Partial<Employee> = {};

  constructor(private profileService: ProfileService) {
    this.imageUrl = this.profileService.imageUrl
  }

  getConfig() {
    return {
      avatar: this.data.avatar,
      background: this.data.background
    }
  }
  
  getContactInfo() {
    return this.data.contactInfo;
  }
}
