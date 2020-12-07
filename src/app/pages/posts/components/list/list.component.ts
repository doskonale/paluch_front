import { PostService } from './../../../../core/services/generic.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { ViewDialogComponent } from '../view-dialog/view-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { map, startWith, switchMap, catchError } from 'rxjs/operators';
import { merge, of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [PostService]
})
export class ListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  count = 0;
  posts = [];
  errorMessage: string;
  isLoadingResults = true;

  constructor(
    public dialog: MatDialog,
    public postService: PostService,
  ) { }

  ngAfterViewInit(): void {
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        const url = `?page=${this.paginator.pageIndex + 1}`;
        return this.postService.get(url);
      }),
      map(data => {
        this.isLoadingResults = false;
        return data;
      }),
      catchError(error => {
        this.isLoadingResults = false;
        this.errorMessage = error.statusText;
        return of(this.errorMessage);
      })
    ).subscribe(response => {
      this.posts = response.results;
      this.count = response.count;
    });
  }


  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      // if (data) {
      //   this.files = this.files.filter(element => element.id !== data.id);
      // }
    });
  }

  openViewDialog(post): void {
    const dialogRef = this.dialog.open(ViewDialogComponent, {
      data: post
    });

    dialogRef.afterClosed().subscribe((data) => {
      // if (data) {
      //   this.files = this.files.filter(element => element.id !== data.id);
      // }
    });
  }

}
