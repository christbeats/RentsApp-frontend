import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/productservice';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PropertiesService } from '../services/properties.service';
import { UserService } from '../services/user.service';

// export interface Property {
//   _id?: string;
//   condition?: string;
//   title?: string;
//   description?: string;
//   type?: string;
//   surfaceArea?: string;
//   livingroom?: number;
//   bathroom?: number;
//   bed?: number;
//   price?: string;
//   location?: string;
//   town?: string;
//   region?: string;
//   featuredImage?: string;
//   image1?: string;
//   image2?: string;
//   image3?: string;
//   image4?: string;
//   status?: boolean;
//   isFeatured?: boolean;
//   lastUpdate?: Date;
// }


export interface User {
  _id?: string;
  email?: string;
  phoneNumber?: string;
  username?: string;
  role?: string;
  status?: Boolean;
  lastUpdate?: Date;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class DashboardComponent implements OnInit {

  productDialog: boolean = false;

  products!: Product[];

  users: User[] = [];
  user!: User;


  loading = false

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

  constructor(private productService: ProductService,
    private propertyService: PropertiesService,
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.productService.getProducts().then((data) => (this.products = data));
    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];

    // this.getProperties({})
    this.getUser()
    this.deleteUser
  }

  // getProperties(params: any): void {
  //   this.loading = true
  //   this.propertyService.getProperties(params).toPromise()
  //     .then(
  //       (data) => {
  //         console.log(data)
  //         this.messageService.add({
  //           icon: 'success',
  //           severity: 'success',
  //           life: 5000,
  //           detail: 'bien jouer!'
  //         })
  //         console.log(data);

  //         this.loading = true
  //         this.properties = data
  //       },
  //       (error) => {
  //         this.loading = true
  //         console.log(error);

  //         this.messageService.add({
  //           icon: 'error',
  //           severity: 'error',
  //           life: 5000,
  //           detail: 'une erreur'
  //         })
  //       },
  //     )
  // }


  getUser(): void {
    this.loading = true
    this.userService.getUser().toPromise()
      .then(
        (data) => {
          this.messageService.add({
            icon: 'success',
            severity: 'success',
            life: 5000,
            detail: 'bien jouer!'
          })
          this.loading = false
          this.users = data.User
          console.log(this.users);
        },
        (error) => {
          this.loading = true
          console.log(error);

          this.messageService.add({
            icon: 'error',
            severity: 'error',
            life: 5000,
            detail: 'une erreur'
          })
        },
      )
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

  // deleteProduct(product: Product) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + product.name + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.products = this.products.filter((val) => val.id !== product.id);
  //       this.product = {};
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  //     }
  //   });
  // }
  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.username + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter((val) => val._id !== user._id);
        this.user = {};
        this.userService.deleteUser(user._id).subscribe((data) => {
          if (data.success) {
            console.log(data.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Property Deleted', life: 3000 })

          } else {
            console.log(data, user._id);
            this.messageService.add({ severity: 'error', summary: 'Dammage', detail: 'Error', life: 3000 })
          }
        })
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
