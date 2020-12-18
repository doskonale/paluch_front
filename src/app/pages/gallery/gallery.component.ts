import { Component, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { empty } from 'rxjs';
import { expand, reduce } from 'rxjs/operators';
import { FileService, fileUrl } from 'src/app/core/services/generic.service';
import { DeleteDialogComponent } from 'src/app/core/shared/components/delete-dialog/delete-dialog.component';
import { FileUploadService } from 'src/app/core/shared/services/file-upload.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [FileService, FileUploadService]
})
export class GalleryComponent implements AfterViewInit {
  items: GalleryItem[];
  imageData = [];
  images = [];
  isLoadingResults = true;

  constructor(
    public gallery: Gallery,
    public fileService: FileService,
    public fileUploadService: FileUploadService,
    public dialog: MatDialog) {
    this.fileUploadService.get().subscribe(res => {
      this.images.push(res);
      this.convertImgs();
    });
  }

  ngAfterViewInit(): void {
    this.getFiles();

  }

  getFiles(): void {
    this.isLoadingResults = true;
    this.fileService.get('?type=img').pipe(
      expand(({ next }) => next ? (
      next = next.slice(fileUrl.length, next.length),
      this.fileService.get(next)) : empty()),
      reduce((acc, response) => acc.concat(response.results), [])
    ).subscribe(res => {
      this.images = res;
      this.convertImgs();
      this.isLoadingResults = false;
    }, error => {
      this.isLoadingResults = false;
    });
  }

  convertImgs(): void {
    this.imageData = this.images.map(image => {
      return {
        srcUrl: image.file,
        previewUrl: image.file
      };
    });
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
  }

  openDeleteDialog(imgObj): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: imgObj
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.images = this.images.filter(element => element.id !== data.id);
        this.convertImgs();
      }
    });
  }
}
