import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { AuthInterceptor, FileService } from 'src/app/core/services/generic.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [FileService]
})
export class GalleryComponent implements OnInit {
  items: GalleryItem[];
  imageData = [];
  fileToUpload: File = null;
  images = [];
  isLoadingResults = true;

  constructor(public gallery: Gallery, public fileService: FileService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fileService.get().subscribe(res => {
      this.images = res;
      this.imageData = res.map(image => {
        return {
          srcUrl: image.file,
          previewUrl: image.file
        };
      });
      this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
      this.isLoadingResults = false;
    }, error => {
      console.log(error);
      this.isLoadingResults = false;
    });
  }

  openDialog(imgObj): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: imgObj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  uploadFileToActivity(): void {
    this.isLoadingResults = true;
    const payload = { file: this.fileToUpload, type: 'img' };
    this.fileService.postFile(payload).subscribe(res => {
      console.log(res);
      this.isLoadingResults = false;
    }, error => {
      console.log(error);
      this.isLoadingResults = false;
    });
  }
}
