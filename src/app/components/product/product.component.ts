import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList!: IProduct[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.showProducts();
  }
  showProducts() {
    this.productService.getProducts().subscribe(data => {
      this.productList = data
    })
  }
  onRemoveItem(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm) {
      // call api xoa
      this.productService.removeProduct(id).subscribe(() => {
        // reRender
        this.productList = this.productList.filter(item => item.id !== id);
      });
    }
  }
}
