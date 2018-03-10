import {Component, OnInit} from '@angular/core';
import { SquadService } from '../../services/squad.service';
//import { SquaddataService } from '../../services/squaddata.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myname: string;
  age: number; // simple type
  address: Address;
  isEditOn: boolean;
  squadMembers: SquadMember;
  //  address: {
  //    street: string,
  //    city: string,
  //    state: string
  //  }; // complex type
  hobbies: string[];
  constructor(private mySquadService: SquadService) {
    console.log('All your base are belong to me');
  }

  ngOnInit() {
    this.myname = 'Joe';
    this.age = 21;
    this.address = {
      street: '6501 Mt. Hood Drive',
      city: 'Bakersfield',
      state: 'CA'
    };
    this.hobbies = ['hobby1', 'hobby2', 'hobby3'];
    this.isEditOn = false;
    this.mySquadService.testFunc();
    this.getSquadFromService();
 }

clickMe() {
  this.myname = 'Joeeeee';
  this.hobbies.push('HOBBY');
}

toggleEdit() {
  this.isEditOn = !this.isEditOn;
}


addHobby(hobby) {
  this.hobbies.unshift(hobby);
  return false;
}

deleteHobby(hobby) {
  for (let i = 0; i < this.hobbies.length; i++) {
  if (this.hobbies[i] === hobby) {
    this.hobbies.splice(i, 1);
    }
  }
}
  getSquadFromService() {
  this.mySquadService.getMySquad().subscribe(data => this.squadMembers = data);
  //this.mySquadService.getMySquad()
  //  .subscribe((results) => {
  //    console.log(results);
  //  this.squadMembers = results;
  //  });
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface SquadMember {
  id: number;
  name: string;
  username: string;
  email: string;
  
}
