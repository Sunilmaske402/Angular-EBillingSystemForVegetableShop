import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AllProductService } from '../Service/all-product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [MatDialogClose, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, MatProgressBarModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  constructor(private productService:AllProductService, private  dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data:any
    ){}

    product:any;
    sid:any;

    ngOnInit(): void {
      this.product=this.data.product;
      this.sid = this.data.sid;
      console.log(this.product.name);
      
    }

 
  updateProduct(){
      this.productService.updateProduct(this.product, this.sid).subscribe((res)=>{
        console.log(res);
        this.dialog.closeAll();
      });
  }
}
