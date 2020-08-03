import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { IBrand } from '../shared/models/brands';
import { IType } from '../shared/models/productType';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  brandIdSelected = 0;
  typeIdSelected = 0;
  sortSelected = 'name';
  sortOptions = [
    {name: 'Alphabetical', value: name},
    {name: 'Low to High', value: 'priceAsc'},
    {name: 'High to Low', value: 'priceDesc'},
  ];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(): any {
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected, this.sortSelected)
      .subscribe(response => {
        this.products = response.data;
      }, error => {
        console.log(error);
      });
  }

  getBrands(): any {
    this.shopService.getBrands().subscribe(response => {
      this.brands = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);
    });
  }

  getTypes(): any {
    this.shopService.getTypes().subscribe(response => {
      this.types = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);
    });
  }

  onBrandSelected(brandId: number): any {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number): any {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

  onSortSelected(sort: string): any {
    this.sortSelected = sort;
    this.getProducts();
  }
}
