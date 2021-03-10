import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()product:Product |null=null;
  @Output() EventEmitter:EventEmitter<ActionEvent> =new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit() {
  }
  onSelect(product:Product)
  {
    this.EventEmitter.emit({
           type:ProductActionsTypes.SELECT_PRODUCT,payload:product})
  }

  onDelete(product:Product)
  {
    this.EventEmitter.emit({
           type:ProductActionsTypes.DELETE_PRODUCT,payload:product})
  }

  onEdit(product:Product)
  {
  this.EventEmitter.emit({
              type:ProductActionsTypes.EDIT_PRODUCT,payload:product})

  }
  

}
