import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InfopageService } from 'src/app/services/infopage.service';

@Component({
  selector: 'app-detail-sales',
  templateUrl: './detail-sales.component.html',
  styleUrls: ['./detail-sales.component.scss']
})
export class DetailSalesComponent implements OnInit {
  @Input() sale: any = null;

  @Output() volver = new EventEmitter();

  constructor(private infoPageService: InfopageService,
              private router: Router,
              private ruta: ActivatedRoute) {

          /*this.ruta.params.subscribe(params => {
          console.log(params['id']);

          this.sale = this.infoPageService.getElement(params['id'])
          // .subscribe(val => console.log(val));
          console.log(this.sale);

          });*/
    }

  ngOnInit(): void {
    /*this.sale = {
      agency : this.ruta.snapshot.params.sale.nameAgency
    };
    console.log(this.sale);

    this.ruta.params.subscribe(
      (params: Params) => {
        this.sale.agency = params.agency;
        console.log(params.agency);

      }
    );*/

  }


  onVolver(): void{
    this.volver.emit();
    this.router.navigate(['/empresas']);
  }


}
