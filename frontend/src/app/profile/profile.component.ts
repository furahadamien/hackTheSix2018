import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData:any = {
    country: '',
    city: '',
    email: '',
    password: '',
    fullName: '',
    selectedDaysId: '',
    volunteeringDayMin: '',
    volunteeringDayMax: '',
    selectedCauses: []
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

  constructor(private http: Http, private route: ActivatedRoute,
    private router: Router) { }

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

  setCauses() {
    this.causes.forEach((element:any) => {
      if(element.checked) {
        this.profileData.selectedCauses.push(element.id);
      }
    });
  }

  submit() {
    this.setCauses();
    this.setDaysToVolunteer(this.profileData.selectedDaysId);
    const body = {
      fullName: this.profileData.fullName,
      country: this.profileData.country,
      city: this.profileData.city,
      email: this.profileData.email,
      password: this.profileData.password,
      causes: this.profileData.selectedCauses
    };
    this.http.post('http://localhost:3000/users/', body).subscribe(res => {
      if(res.ok) {
        const body = JSON.parse(res['_body']);
        localStorage.setItem('token', body.token);
        this.router.navigate(['/organizations'], { queryParams: { 
          volunteeringDayMin: this.profileData.volunteeringDayMin,
          volunteeringDayMax: this.profileData.volunteeringDayMax
        } });
      }
    });
  }
}
