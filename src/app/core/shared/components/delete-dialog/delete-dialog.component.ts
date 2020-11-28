import { FileService } from 'src/app/core/services/generic.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
  providers: [FileService]
})
export class DeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fileService: FileService) {}

  deleteFile(): void {
    this.fileService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data);
    });
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

}
