import { Component, OnInit } from '@angular/core';
import { InfopageService } from 'src/app/services/infopage.service';

@Component({
  selector: 'app-data-sales',
  templateUrl: './data-sales.component.html',
  styleUrls: ['./data-sales.component.scss']
})
export class DataSalesComponent implements OnInit {
  sales: any = [];
  url = '../../assets/sales.json';

  constructor(private infoPageService: InfopageService) {}

  ngOnInit(): void {
    this.infoPageService.getJson(this.url)
     .subscribe((data) => this.displayData(data));
  }
  displayData(data: any): any
    {
      this.sales = data;
      console.log(data);
    }

}
