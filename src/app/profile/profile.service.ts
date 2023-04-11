import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { indexQuery } from "./profile.queries";
import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private userInfo;

  constructor() {
    this.userInfo = this.sanityClientCredentials.option.observable.fetch(indexQuery);
  }

  sanityClientCredentials = {
    option: createClient({
      projectId: environment.SANITY_PROJECT_ID,
      dataset: environment.SANITY_DATASET,
      apiVersion: environment.SANITY_API_VERSION,
    })
  }

  imageUrl = (source: any) => ImageUrlBuilder(this.sanityClientCredentials.option).image(source);

  getUserInfo() {
    return this.userInfo;
  }
}
