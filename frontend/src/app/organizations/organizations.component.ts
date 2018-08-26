import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  organizations:any = [];

  constructor(private http: Http, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.http.post(`http://localhost:3000/users/organizations/`, {
        'x-access-token':  localStorage.getItem('token'),
        'volunteeringDayMin': Number(params.volunteeringDayMin),
        'volunteeringDayMax': Number(params.volunteeringDayMax)
      } ).subscribe(res => {
        const body = JSON.parse(res['_body']);
        this.organizations = body.data;
      });
    });
  }

}
