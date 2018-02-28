import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SquadService {

  constructor(protected httpClient: Http) {
  console.log('hi');
  }
  public testFunc(): boolean {
    console.log('I am a service function');
    return false;
  }
  getMySquad() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users')
      .map(
        res => res.json()
    );
  }
}
