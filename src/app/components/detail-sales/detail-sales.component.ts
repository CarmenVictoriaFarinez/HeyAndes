import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-sales',
  templateUrl: './detail-sales.component.html',
  styleUrls: ['./detail-sales.component.scss']
})
export class DetailSalesComponent implements OnInit {
  @Input() sale: any = null;
  @Output() volver = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onVolver(): void{
    this.volver.emit();
  }

}
