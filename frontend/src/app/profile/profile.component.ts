import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData = {
    country: '',
    city: '',
    email: '',
    password: '',
    fullName: '',
    selectedDaysId: '',
    volunteeringDayMin: '',
    volunteeringDayMax: ''
  };

  causes:any = [];
  daysToVolunteer:any = [
    {
      min: 1,
      max: 5,
      id: 1
    },
    {
      min: 5,
      max: 10,
      id: 2
    },
    {
      min: 10,
      max: 15,
      id: 3
    },
    {
      min: 15,
      max: 20,
      id: 4
    }
  ];

  constructor(private http: Http) { }

  ngOnInit() { 
    this.http.get('http://localhost:3000/causes/').subscribe(res => {
      const body = JSON.parse(res['_body']);
      body.data.forEach((element: any) => {
        element.checked = false;
      });  
      this.causes = body.data;
    });
  }

  setDaysToVolunteer(id: any) {
    this.daysToVolunteer.forEach((element: any) => {
      if(element.id === id) {
        this.profileData.volunteeringDayMin = element.min;
        this.profileData.volunteeringDayMax = element.max;
      }
    });
  }

  submit() {
    this.setDaysToVolunteer(this.profileData.selectedDaysId);
    const body = {
      fullName: this.profileData.fullName,
      country: this.profileData.country,
      city: this.profileData.city,
      email: this.profileData.email,
      password: this.profileData.password,
      volunteeringDayMin: this.profileData.volunteeringDayMin,
      volunteeringDayMax: this.profileData.volunteeringDayMax
    };
    this.http.post('http://localhost:3000/users/', body).subscribe(res => {
      console.log(res.ok);
    });
  }
}
