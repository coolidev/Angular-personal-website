import { Component, Input, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Employee } from '../profile.queries';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  model: any = {};
  
  @Input() data: Partial<Employee> = {}

  constructor() {}

  ngOnInit() {}
  
  getContactInfo() {
    return this.data.contactInfo;
  }
}
