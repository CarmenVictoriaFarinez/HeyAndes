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
  public nameAgency!: any;
  url = '../../assets/sales.json';

  constructor(private infoPageService: InfopageService,
              private router: Router,
             ) {}

  ngOnInit(): void {
    this.infoPageService.getJson(this.url)
     .subscribe((data) => this.displayData(data));
  }
  displayData(data: any): any
    {
      this.sales = data;
      console.log(data);
    }

    agency(sale: any): void{
      this.sale = sale;
      console.log(this.sale);
      this.router.navigate(['agency']);
    }

}
