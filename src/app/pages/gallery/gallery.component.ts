import { LocalStorageService } from './../../core/services/local-storage.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { FileService } from 'src/app/core/services/generic.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [FileService]
})
export class GalleryComponent implements AfterViewInit {
  items: GalleryItem[];
  imageData = [];
  fileToUpload: File = null;
  images = [];
  isLoadingResults = true;

  constructor(
    public gallery: Gallery,
    public fileService: FileService,
    public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.isLoadingResults = true;
    this.fileService.get().subscribe(res => {
      this.images = res;
      this.convertImgs();
      this.isLoadingResults = false;
    }, error => {
      console.log(error);
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

  openDialog(imgObj): void {
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

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  uploadFileToActivity(): void {
    this.isLoadingResults = true;
    const payload = { file: this.fileToUpload, type: 'img' };
    this.fileService.postFile(payload).subscribe(res => {
      this.images.push(res);
      this.convertImgs();
      this.fileToUpload = null;
      this.isLoadingResults = false;
    }, error => {
      console.log(error);
      this.isLoadingResults = false;
    });
  }
}
