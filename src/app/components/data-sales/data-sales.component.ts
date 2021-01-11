import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InfopageService } from 'src/app/services/infopage.service';
import { Router } from '@angular/router';


export interface saleInterface {
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
  sales: Array<any> = [];
  sale = null;
  salesUnique: any = [];
  salesMax = 0;
  constructor(private infoPageService: InfopageService,
              private router: Router,
              private ref: ChangeDetectorRef ) {}



  ngOnInit(): void {
    this.infoPageService.getJson().subscribe((salesSnapshot) => {
      salesSnapshot.forEach((saleData: any) => {
        this.sales.push({
          id: saleData.payload.doc.id,
          data: saleData.payload.doc.data(),
          nameA: saleData.payload.doc.data().nameAgency
        });
      });
      this.sales.forEach(element => {
        if (!this.salesUnique.some((item: any ) => item.nameA === element.nameA)){
          this.salesUnique.push({
            finalPrice: 0,
            finalPriceAmount: 0,
            nameA: element.nameA
          });
        }
      });
      this.sales.forEach((sale: any ) => {
        this.salesUnique.forEach((saleU: any) => {
          if (sale.nameA === saleU.nameA){
            const index = this.salesUnique.indexOf(this.salesUnique.find((d: any ) => d.nameA === saleU.nameA));
            this.salesUnique[index].finalPrice = this.salesUnique[index].finalPrice + sale.data.finalPrice;
            this.salesUnique[index].finalPriceAmount = this.salesUnique[index].finalPriceAmount + (sale.data.finalPrice * 0.025);
          }
        });
      });
      this.ref.detectChanges();
      console.log(this.salesUnique);
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
      const arrayData: Array <saleInterface> = [];
      this.sales.forEach((element: any ) => {
        if ( element.data.nameAgency === name){
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
      localStorage.setItem('details', JSON.stringify(arrayData));
      this.router.navigate(['/empresas', name]);
    }

    ordenAs(sale: any): void {
      const ascendente = this.salesUnique.sort((prev: any, next: any) => {
        if (prev.nameA > next.nameA) {
          return 1;
        } return -1;
      });
      return ascendente;
    }


    ordenM(sale: any): void {
      const mayor = this.salesUnique.sort((prev: any, next: any) => {
        if (prev.finalPriceAmount < next.finalPriceAmount) {
          return 1;
        } return -1;
      });
      return mayor;
    }

}
