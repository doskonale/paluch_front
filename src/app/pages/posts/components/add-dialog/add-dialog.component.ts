import { CustomDateAdapter, DateToISOStringReverse } from './../../../../core/shared/custom-date-adapter';
import { DateAdapter } from '@angular/material/core';
import { Component, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from 'src/app/core/services/generic.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
  providers: [PostService, { provide: DateAdapter, useClass: CustomDateAdapter }]
})


export class AddDialogComponent implements AfterViewInit {
  isLoadingResults = false;
  success = false;
  errorMessage: string;
  post = {
    title: null,
    content: null,
    start_date: null,
    end_date: null,
    side_nav: null,
  };

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public postService: PostService) { }

  ngAfterViewInit(): void {
  }

  addPost(): void {
    this.isLoadingResults = true;
    let payload = JSON.parse(JSON.stringify(this.post));
    payload.start_date = DateToISOStringReverse(payload.start_date);
    payload.end_date = DateToISOStringReverse(payload.end_date);
    this.postService.post(payload).subscribe(
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
