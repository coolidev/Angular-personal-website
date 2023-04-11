import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Employee } from '../profile.queries';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  imageUrl: any;
  currentSkill: string;

  @Input() data: Partial<Employee> = {};

  constructor(private profileService: ProfileService) {
    this.imageUrl = this.profileService.imageUrl;
    this.currentSkill = '';
  }

  getSkills() {
    return this.data.skills
  }

  setCurrent(data: string)  {
    this.currentSkill = data;
  }
}
