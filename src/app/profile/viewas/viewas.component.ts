import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-viewas',
  templateUrl: './viewas.component.html',
  styleUrls: ['./viewas.component.scss'],
})
export class ViewAsComponent implements OnInit {
  viewAs: any = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.viewAs = this.profileService.getViewAs();
  }
}
