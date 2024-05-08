import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  success: boolean = false;
  errors!: String[];

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
  }

  category: Category = {
    idCategory: '',
    nameCategory: '',
    descriptionCategory: ''
  }

  saveCategory() {        
    this.service.save(this.category).subscribe((response: any) => {
      this.success = true;
      this.errors = [];
      this.category = response.result as Category;                      
    });
  }

}