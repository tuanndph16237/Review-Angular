import { Component } from '@angular/core';
import Data from 'src/data';
import { IProduct } from './models/Product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Review-Angular';
  productList: IProduct[] = Data;
  onHandleAdd(product: any) {
    console.log('prduct', product);
    this.productList.push(product);
  }
}
