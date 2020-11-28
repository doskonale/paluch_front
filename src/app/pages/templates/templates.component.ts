import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from 'src/app/core/services/generic.service';
import { DeleteDialogComponent } from 'src/app/core/shared/components/delete-dialog/delete-dialog.component';
import { FileUploadService } from 'src/app/core/shared/services/file-upload.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
  providers: [FileService, FileUploadService]
})
export class TemplatesComponent implements AfterViewInit {
  fileToUpload: File = null;
  files = [];

  constructor(
    public fileService: FileService,
    public fileUploadService: FileUploadService,
    public dialog: MatDialog) {
  }

  ngAfterViewInit(): void {
    this.getFiles();
    this.fileUploadService.get().subscribe(res => {
      this.files.push(res);
    });
  }

  getFiles(): void {
    this.fileService.get('?type=doc').subscribe(res => {
      console.log(res);
      this.files = res;
    });
  }

  openDeleteDialog(imgObj): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: imgObj
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.files = this.files.filter(element => element.id !== data.id);
      }
    });
  }
}
