import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from 'src/app/core/services/generic.service';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss'],
  providers: [PostService]
})
export class ViewDialogComponent {
  post;

  constructor(
    public dialogRef: MatDialogRef<ViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public postService: PostService) {
      this.post = data;
    }


  onNoClick(): void {
    this.dialogRef.close(null);
  }

}
