import { PostService } from './../services/generic.service';
import { Component, AfterViewInit, Input } from '@angular/core';
import { DateToISOStringReverse } from '../shared/custom-date-adapter';
import { ViewDialogComponent } from 'src/app/pages/posts/components/view-dialog/view-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss'],
  providers: [PostService]
})
export class NotificationPanelComponent implements AfterViewInit {
  @Input() showPopup = true;
  @Input() getData = true;
  posts = [];
  isLoadingResults = true;

  constructor(
    private postService: PostService,
    public dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    const currentDate = DateToISOStringReverse(new Date());
    if (this.getData) {
      this.postService.get('?start_date__lte=' + currentDate + '&end_date__gte=' + currentDate).subscribe(response => {
        this.posts = response.results;
        this.isLoadingResults = false;
        if (this.showPopup) {
          this.posts.forEach(post => {
            this.openViewDialog(post);
          });
        }
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