import { Component } from '@angular/core';
import City from './models/city';
import products from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyApp';
  myName: string = 'Gokul SRM Technologies';
  hUrl: string =
    'https://cdn.shopify.com/s/files/1/1979/8223/products/Screenshot_138_1200x1200.png?v=1555970085';
  gUrl: string =
    'https://i1.wp.com/exclumagazine.com/wp-content/uploads/2018/09/BG_TOYART_Baby-Groot-17.jpg?w=393&h=679&ssl=1';
  public len: number = 0;

  myCities: City[] = [];
  myproduct: products[] = [];
  sCity!: City;

  content:string="This is From the Parent Component";

  word = '';
  word1 = '';
  word2 = '';
  text = '';
  mail = '';

  constructor() {
    setTimeout(() => {
      console.log('SetTimout runs for 5000 milliseconds.');
      this.hUrl = this.gUrl;
      this.title = 'Im Groot';
    }, 4000);

    this.myCities = [
      { cId: 17, cName: 'Chennai', state: 'Tamil Nadu' },
      { cId: 12, cName: 'Thiruvananthapuram', state: 'Kerala' },
      { cId: 33, cName: 'Benguluru', state: 'Karnataka' },
      { cId: 18, cName: 'Coimbator', state: 'Tamil Nadu' },
      { cId: 76, cName: 'Hyderabad', state: 'Telangana' },
      { cId: 96, cName: 'Kolkata', state: 'West Bengal' },
      { cId: 10, cName: 'Panaji', state: 'Goa' },
      { cId: 21, cName: 'Gandhinagar', state: 'Gujarat' },
      { cId: 90, cName: 'Shimla', state: 'Himachal Pradesh' },
      { cId: 63, cName: 'Mumbai', state: 'Maharashtra' },
    ];
    this.myproduct=[
      {pId:1005, pName:"Sony WI-XB400", pDesc:"Earphones-Blutooth", pCost:"3299"},
      {pId:1233, pName:"OnePlus 8 Pro", pDesc:"SmartPhone", pCost:"54999"},
      {pId:7634, pName:"Amazfit GTS 2", pDesc:"Smart Health Fit Watch", pCost:"12999"},
      {pId:3847, pName:"MSI Prestige 15", pDesc:"Laptop", pCost:"108599"},
      {pId:9842, pName:"Bajaj SteamElite Steam", pDesc:"Steam Iron Box", pCost:"5499"},
      {pId:2317, pName:"F&D X4000", pDesc:"Home Theater System", pCost:"15500"},
      {pId:8435, pName:"Preethi Induction IS150", pDesc:"Induction Stove", pCost:"3050"},
      {pId:1547, pName:"Logitech G 304", pDesc:"Wireless-Mouse", pCost:"3259"},
      {pId:7355, pName:"Sony NW-A55", pDesc:"Sony Walkmean Hi-Res Audio", pCost:"14999"},
      {pId:2478, pName:"Lenovo D27-30", pDesc:"Monitor", pCost:"12759"}

    ];
  }
  handlesCityList(c: City) {
    this.sCity = c;
    console.log(this.sCity);
  }
  onkeyenter(txt: any) {
    this.word += txt.target.value + ' ';
  }
  onkeyshift(txt1: any) {
    this.word1 += txt1.target.value + ' ';
  }
  onkeyentry(txt2: any) {
    this.word2 += txt2.target.value + ' ';
  }
  onclickbutton() {
    this.text += this.word2 + this.word + this.word1;
  }
  oneference(d: string) {
    this.mail += d;
    alert('Mail sent to - ' + this.mail);
  }
  AddProduct(edata:products){
      console.log(JSON.stringify(edata));
      this.myproduct.push(edata);
      
  }
  RemoveProduct(ids:number){
    console.log("Product id removed:"+ids);
    this.myproduct.forEach((item,index)=>{
      if(item.pId==ids){
        this.myproduct.splice(index,1);
      }
    });
  }
}
