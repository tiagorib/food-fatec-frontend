import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  success: boolean = false;
  errors!: String[];
  ELEMENT_DATA: Customer[] = [];
  message: string = '';

  constructor(
    private service: CustomerService
  ) { }

  ngOnInit(): void {
  }

  customer: Customer = {
    idCustomer: '',
    firstNameCustomer: '',
    lastNameCustomer: '',
    birthdateCustomer: '',
    dateCreatedCustomer: '',
    monthlyIncomeCustomer: '',
    cpfCustomer: '',
    emailCustomer: '',
    passwordCustomer: '',
    statusCustomer: true
  }

  saveCustomer() {    
    const datePipe = new DatePipe('en-US');
    this.customer.birthdateCustomer = datePipe.transform(this.customer.birthdateCustomer, 'dd/MM/yyyy');
    
    this.service.save(this.customer).subscribe((response: any) => {
      this.success = true;
      this.errors = [];
      this.customer = response.result as Customer;       
      var date = this.customer.birthdateCustomer;
      var newDate = date.split("/").reverse().join("-");
      this.customer.birthdateCustomer = newDate;        
    });
  }

}
