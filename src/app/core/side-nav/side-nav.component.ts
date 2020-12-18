import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from 'src/app/pages/posts/components/view-dialog/view-dialog.component';
import { PostService } from '../services/generic.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  providers: [PostService]
})
export class SideNavComponent implements AfterViewInit {
  @Input() getData = true;
  posts = [];
  isLoadingResults = true;

  constructor(
    private postService: PostService,
    public dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    if (this.getData) {
      this.postService.get('?side_nav=true').subscribe(response => {
        this.posts = response.results;
        this.isLoadingResults = false;
      });
    } else {
      this.isLoadingResults = false;
    }
  }

  openViewDialog(post): void {
    const dialogRef = this.dialog.open(ViewDialogComponent, {
      data: post
    });
  }
}
