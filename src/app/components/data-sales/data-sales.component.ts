import { Component, OnInit } from '@angular/core';
import { InfopageService } from 'src/app/services/infopage.service';
import { Router } from '@angular/router';

export interface saleInterface{
        name: string;
        people: string;
        day: string;
        hour: string;
        sales: number;
}

@Component({
  selector: 'app-data-sales',
  templateUrl: './data-sales.component.html',
  styleUrls: ['./data-sales.component.scss']
})
export class DataSalesComponent implements OnInit {
  sales: any = [];
  sale = null;

  constructor(private infoPageService: InfopageService,
              private router: Router ) {}



  ngOnInit(): void {
    this.infoPageService.getJson().subscribe((salesSnapshot) => {
      this.sales = [];
     // console.log(salesSnapshot);
      salesSnapshot.forEach((saleData: any) => {
        this.sales.push({
          id: saleData.payload.doc.id,
          data: saleData.payload.doc.data()
          // nameAgency: saleData.payload.doc.data().nameAgency
        });
      });
    });
  }


    agency(name: string): void{
      let obj: saleInterface = {
        name: '',
        people: '',
        day: '',
        hour: '',
        sales: 0
      };
      let arrayData:Array<saleInterface> = [];
      this.sales.forEach((element:any) => {
        if(element.data.nameAgency === name){
          obj = {
          name: element.data.nameAgency,
          people: element.data.name,
          day: element.data.day,
          hour: element.data.hour,
          sales: element.data.finalPrice
        };
          arrayData.push(obj);
        }
      });
      localStorage.setItem("details",JSON.stringify(arrayData));
      console.log(arrayData);
      this.router.navigate(['/empresas', name]);
    }

}
