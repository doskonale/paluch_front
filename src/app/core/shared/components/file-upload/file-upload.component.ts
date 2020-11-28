import { Component, Input } from '@angular/core';
import { FileService } from '../../../services/generic.service';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() module: string;
  @Input() type: string;

  fileToUpload: File = null;
  isLoadingResults: boolean;

  constructor(
    public fileService: FileService,
    public fileUploadService: FileUploadService
  ) { }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity(): void {
    this.isLoadingResults = true;
    const payload = { file: this.fileToUpload, type: this.type, module: this.module };
    this.fileService.postFile(payload).subscribe(res => {
      this.fileUploadService.set(res);
      this.fileToUpload = null;
      this.isLoadingResults = false;
    }, error => {
      console.log(error);
      this.isLoadingResults = false;
    });
  }
}
