import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../profile.queries';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  about1: any;
  about2: any;

  @Input() data: Partial<Employee> = {};

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    // this.about1 = this.profileService.about;
    // this.about2 = this.profileService.about2;
    // this.profileService.getUserInfo().subscribe((data) => {
    //   this.data.name = data[0].name;
    //   this.data.contactInfo = data[0].contactInfo.mail;
    //   this.data.summary = data[0].summary;
    // })
  }
}
