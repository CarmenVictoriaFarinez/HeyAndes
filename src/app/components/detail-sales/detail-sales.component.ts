import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { InfopageService } from 'src/app/services/infopage.service';
import { saleInterface } from '../data-sales/data-sales.component';


@Component({
  selector: 'app-detail-sales',
  templateUrl: './detail-sales.component.html',
  styleUrls: ['./detail-sales.component.scss']
})
export class DetailSalesComponent implements OnInit {
  @Input() sale: any = null;
  arrayData: Array <saleInterface> = [];
  total: number | undefined;
 

  constructor(private infoPageService: InfopageService,
              private router: Router,
              private ruta: ActivatedRoute) {

          (this.ruta.snapshot.paramMap.get('id'));

    }

  ngOnInit(): void {
    const agency = this.ruta.snapshot.paramMap.get('id');
    console.log(agency);

    this.arrayData = JSON.parse(localStorage.getItem('details'));
    console.log(this.arrayData);


  // Calculamos el TOTAL
    this.total = this.arrayData.reduce((sum, current) => sum + (current.sales), 0);
    console.log('Total: ', this.total);

  }
}
