import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, AppDataState, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()product:Product |null=null;
 // @Output() EventEmitter:EventEmitter<ActionEvent> =new EventEmitter<ActionEvent>();
  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit() {
  }
  onSelect(product:Product)
  { 
    this.eventDriverService.publishEvent({
           type:ProductActionsTypes.SELECT_PRODUCT,payload:product})
    /*
    this.EventEmitter.emit({
           type:ProductActionsTypes.SELECT_PRODUCT,payload:product})*/
  }

  onDelete(product:Product)
  {
    this.eventDriverService.publishEvent({
           type:ProductActionsTypes.DELETE_PRODUCT,payload:product})
/*
    this.EventEmitter.emit({
           type:ProductActionsTypes.DELETE_PRODUCT,payload:product})*/
  }

  onEdit(product:Product)
  {
    this.eventDriverService.publishEvent({
          type:ProductActionsTypes.EDIT_PRODUCT,payload:product})
/*
  this.EventEmitter.emit({
              type:ProductActionsTypes.EDIT_PRODUCT,payload:product})*/

  }
  

}
