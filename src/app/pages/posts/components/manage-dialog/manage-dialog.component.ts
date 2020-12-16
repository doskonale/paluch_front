import { Component, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from 'src/app/core/services/generic.service';
import { CustomDateAdapter, DateToISOStringReverse } from './../../../../core/shared/custom-date-adapter';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-manage-dialog',
  templateUrl: './manage-dialog.component.html',
  styleUrls: ['./manage-dialog.component.scss'],
  providers: [PostService, { provide: DateAdapter, useClass: CustomDateAdapter }]
})
export class ManageDialogComponent implements AfterViewInit {
  isLoadingResults = false;
  success = false;
  errorMessage: string;
  post = {
    id: null,
    title: null,
    content: null,
    start_date: null,
    end_date: null,
    side_nav: null
  };

  constructor(
    public dialogRef: MatDialogRef<ManageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public postService: PostService) {
      this.post = JSON.parse(JSON.stringify(data));
     }

  ngAfterViewInit(): void {
  }

  updatePost(): void {
    this.isLoadingResults = true;
    let payload = JSON.parse(JSON.stringify(this.post));
    payload.start_date = DateToISOStringReverse(payload.start_date);
    payload.end_date = DateToISOStringReverse(payload.end_date);
    this.postService.patch(payload).subscribe(
      res => {
        this.post = res;
        this.isLoadingResults = false;
        this.success = true;
      },
      error => {
        this.errorMessage = error;
        this.isLoadingResults = false;
      }
    );
  }

  onNoClick(): void {
    this.success ? this.dialogRef.close(this.post) : this.dialogRef.close(null);
  }
}
