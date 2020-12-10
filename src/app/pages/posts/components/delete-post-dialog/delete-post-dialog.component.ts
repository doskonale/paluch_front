import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from 'src/app/core/services/generic.service';

@Component({
  selector: 'app-delete-post-dialog',
  templateUrl: './delete-post-dialog.component.html',
  styleUrls: ['./delete-post-dialog.component.scss'],
  providers: [PostService]
})
export class DeletePostDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeletePostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public postService: PostService) { }

  deletePost(): void {
    this.postService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data);
    });
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }
}
