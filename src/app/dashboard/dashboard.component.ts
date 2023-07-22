import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/productservice';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class DashboardComponent implements OnInit {

  productDialog: boolean = false;

  products!: Product[];

  product!: Product;

  selectedProducts!: Product[] | null;

  submitted: boolean = false;

  statuses!: any[];


  // form = this.formBuilder.group(
  //   {
  //     place: ['', Validators.required],
  //     name: ['', [Validators.required]],
  //     description: ['', [Validators.required]],
  //     owner_name: ['', [Validators.required]],
  //     owner_phone: ['', [Validators.required, Validators.minLength(9)]],
  //     category: ['', [Validators.required]]
  //   }

  // );
  // formUpdate = this.formBuilder.group(
  //   {
  //     place: ['', Validators.required],
  //     name: ['', [Validators.required]],
  //     description: ['', [Validators.required]],
  //     owner_name: ['', [Validators.required]],
  //     owner_phone: ['', [Validators.required, Validators.minLength(9)]],
  //     category: ['', [Validators.required]]
  //   }
  // );



  sideBarOpen = true;

  constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.productService.getProducts().then((data) => (this.products = data));
    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];

  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }



  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  deleteSelectedProperty() {
    console.log("delete");
  }

  openUpdate(loc: any) { }

  deletelocation(loc: any) { }

  insertLocation(params: any) { }

  imageChange(params: any, uri: any) { }


  UpdateLocation(loc: any) { }

  hideDialog() { }

  getSeverity(loc: any) { }
  saveProduct() { }
}
