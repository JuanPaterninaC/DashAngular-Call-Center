import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items:any[]=[];

  constructor(public dashboardService:DashboardService) { }

  async ngOnInit() {

    this.items=await this.dashboardService.getCalls();

    console.log(this.items)

  }

}
