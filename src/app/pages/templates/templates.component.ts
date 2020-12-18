import { Component, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { empty } from 'rxjs';
import { expand, reduce } from 'rxjs/operators';
import { FileService, fileUrl } from 'src/app/core/services/generic.service';
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
  isLoadingResults = true;

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
    this.fileService.get('?type=doc').pipe(
      expand(({ next }) => next ? (
      next = next.slice(fileUrl.length, next.length),
      this.fileService.get(next)) : empty()),
      reduce((acc, response) => acc.concat(response.results), [])
    ).subscribe(res => {
      this.files = res;
      this.isLoadingResults = false;
    }, error => {
      this.isLoadingResults = false;
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
