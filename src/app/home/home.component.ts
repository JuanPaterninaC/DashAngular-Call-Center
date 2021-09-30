import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:any[]=[];

  constructor(public dashboardService:DashboardService) { }

  async ngOnInit() {

  this.items=await this.dashboardService.getCalls();

  console.log(this.items)

  }

}
