import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/productservice';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PropertiesService } from '../services/properties.service';
import { UserService } from '../services/user.service';



export interface Property {
  _id?: string;
  title?: string;
  description?: string;
  conditions?: string;
  type?: string;
  surfaceArea?: string;
  livingroom?: number;
  bathroom?: number;
  bed?: number;
  price?: string;
  location?: string;
  town?: string;
  region?: string;
  featuredImage?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  status?: boolean;
  isFeatured?: boolean;
  lastUpdate?: Date;
}

// export interface User {
//   email?: string;
//   phoneNumber?: string;
//   username?: string;
//   role?: string;
//   status?: Boolean;
//   lastUpdate?: Date;
// }

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class PropertiesComponent implements OnInit {

  // productDialog: boolean = false;
  propertyDialog: boolean = false;

  // products!: Product[];



  properties: Property[] = [];
  property!: Property;
  imageProperties!: any[]
  loading = false

  // product!: Product;

  selectedProducts!: Product[] | null;

  submitted: boolean = false;

  statuses!: any[]
  // room!: any[];
  regions!: any[];


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
  // formUpdate = this.FormBuilder.group(
  //   {
  //     place: ['', Validators.required],
  //     name: ['', [Validators.required]],
  //     description: ['', [Validators.required]],
  //     owner_name: ['', [Validators.required]],
  //     owner_phone: ['', [Validators.required, Validators.minLength(9)]],
  //     category: ['', [Validators.required]]
  //   }
  // );

  form = this.formBuilder.group(
    {

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }

  );



  sideBarOpen = true;
  loadingupdate = false;

  constructor(private productService: ProductService,
    private propertiesService: PropertiesService,
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.statuses = [
      { label: 'ROOM', value: 'room' },
      { label: 'APPARTMENT', value: 'appartement' },
      { label: 'HOUSE', value: 'house' }


    ];


    // console.log("mes images" + this.imageProperties);




    this.regions = [
      { label: 'CENTER', value: 'center' },
      { label: 'SOUTH', value: 'south' },
      { label: 'SOUTH WEST', value: 'south-west' },
      { label: 'EAST', value: 'east' },
      { label: 'NORTH WEST', value: 'north-west' },
      { label: 'ADAMAWA', value: 'adamawa' },
      { label: 'WEST', value: 'west' },
      { label: 'LITORAL', value: 'litoral' },
      { label: 'FAR NORTH', value: 'far-north' },
      { label: 'NORTH', value: 'north' }
    ];

    this.getProperties()
    // this.getUser()
    // this.deleteUser
    this.deleteProperty
  }

  getProperties(): void {
    this.loading = true
    this.propertiesService.getProperties().toPromise()
      .then(
        (data) => {
          console.log(data)
          this.messageService.add({
            icon: 'success',
            severity: 'success',
            life: 5000,
            detail: 'bien jouer!'
          })
          console.log(data);

          this.loading = false
          this.properties = data.Property
          console.log(this.properties);
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


  // getUser(): void {
  //   this.loading = true
  //   this.userService.getUser().toPromise()
  //     .then(
  //       (data) => {
  //         this.messageService.add({
  //           icon: 'success',
  //           severity: 'success',
  //           life: 5000,
  //           detail: 'bien jouer!'
  //         })
  //         this.loading = false
  //         this.users = data.User
  //         console.log(this.users);
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

  openNew() {
    // this.product = {};
    this.submitted = false;
    // this.productDialog = true;
    this.propertyDialog = true;
  }



  // deleteSelectedProducts() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete the selected products?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
  //       this.selectedProducts = null;
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
  //     }
  //   });
  // }

  editProperty(property: Property) {
    this.property = { ...property }
    this.propertyDialog = true

    this.imageProperties = [
      this.property.featuredImage,
      this.property.image1,
      this.property.image2,
      this.property.image3,
      this.property.image4
    ]


    // this.propertiesService.editProperty(this.property).subscribe( data =>{
    // })
  }

  saveProperty(){
    this.loadingupdate = true;
    this.propertiesService.editProperty({
      ...this.property,
      // featuredImage:this.property.featuredImage,
      // image1:this.property.image1,
      // image2:this.property.image2,
      // image3:this.property.image3,
      // image4:this.property.image4
    }).toPromise().then(
      (d) => {
        this.loadingupdate = false
        this.propertyDialog = false
        this.getProperties()
      },
      (er) => {
        this.loadingupdate = false;
        console.log(er);
      }
    )
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


  // deleteUser(user: User) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + user.username + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.users = this.users.filter((val) => val.email !== user.email);
  //       this.user = {};
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
  //     }
  //   });
  // }

  deleteProperty(property: Property) {
    console.log(property);
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + property.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.properties = this.properties.filter((val) => val._id !== property._id);
        this.property = {};
        this.propertiesService.deleteProperty(property._id).subscribe((data) => {
          if (data.success) {
            console.log(data.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Property Deleted', life: 3000 })

          } else {
            console.log(data, property._id);
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
