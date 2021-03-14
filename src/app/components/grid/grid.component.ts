import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import City from 'src/app/models/city';
import products from 'src/app/models/product';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  @Input()
  public prod: products[] = [];

  @Output('eap')
  public eAddProduct: EventEmitter<products> = new EventEmitter<products>();

  @Output('erp')
  public eRemoveProduct: EventEmitter<any> = new EventEmitter<any>();

  public prods: products = new products(0, '', '', '');
  myCountries: any;

  constructor() {}

  ngOnInit(): void {}

  handlesAddProduct(pid: number, pname: string, pdesc: string, pcost: string) {
    this.prods = new products(pid, pname, pdesc, pcost);
    console.log(JSON.stringify(this.prods));
    this.eAddProduct.emit(this.prods);
  }

  handlesRemoveProduct(pid: number) {
    this.eRemoveProduct.emit(pid);
  }

  displaySelectedDropDown(e: any) {
    this.myCountries = e.target.value;
  }

  disp() {
    console.log(alert('Details Saved!..'));
  }

  getevenorodd(datas:products[],m:boolean){
    if (m) {
      return datas.filter((d:products)=>d.pId%2==0);
    }
    return datas.filter((d:products)=>d.pId%2!==0);
  }
  
}
