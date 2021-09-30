import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    
  constructor(private http: HttpClient) {}
  
  async getCalls():Promise<any[]> {

    const servicePath = environment.url_api; 
    return new Promise<any[]>((resolve,reject) => {

        this.http.get<any[]>(servicePath).subscribe(resolve,reject)

    } )

  }


}
