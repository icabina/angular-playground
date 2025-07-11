//Standalone: https://angular.dev/playground

import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-fetch',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div *ngIf="loading">
      <h2>Loading</h2>
    </div>

    <div *ngIf="!loading">
      <select [(ngModel)]="category" (change)="handleCategoryChange()">
        <option value="All">All Categories</option>
        <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
      </select>

      <button (click)="handleSort()">Sort</button>

      <ul>
        <li *ngFor="let p of filteredProducts">
          <h2>{{ p.title }}</h2>
          <p>\${{ p.price }}</p>
          <img [src]="p.image" [alt]="p.title" width="100" />
        </li>
      </ul>
    </div>
  `,
})
export class FetchComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  loading = false;
  category = 'all';

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.loading = true;
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.filteredProducts = data;
        this.categories = Array.from(new Set(data.map((p) => p.category)));
      },
      error: (err: any) => console.log(err),
      complete: () => (this.loading = false),
    });
  }

  handleSort() {
    this.filteredProducts = [...this.filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  handleCategoryChange() {
    this.filteredProducts =
      this.category === 'all'
        ? this.products
        : this.products.filter((p) => p.category === this.category);
  }
}

// bootstrapApplication(AppComponent);
