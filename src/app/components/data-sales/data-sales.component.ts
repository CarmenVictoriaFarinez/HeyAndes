import { Component, OnInit } from '@angular/core';
import { InfopageService } from 'src/app/services/infopage.service';
import { Router } from '@angular/router';



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
      salesSnapshot.forEach((saleData: any) => {
        this.sales.push({
          id: saleData.payload.doc.id,
          data: saleData.payload.doc.data()
          // nameAgency: saleData.payload.doc.data().nameAgency
        });
      });
    });
  }


    agency(sale: any, i: any): void{
      this.sale = sale;
      // this.router.navigate(['/empresas', i]);
      console.log(i);
      console.log(sale.data);
      // console.log(sale.nameAgency);
      // console.log(sale.data.nameAgency);
    }

}
