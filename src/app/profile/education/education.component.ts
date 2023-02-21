import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educations: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.educations = this.profileService.education();
  }
}
