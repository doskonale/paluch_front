import { LocalStorageService } from './../services/local-storage.service';
import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAuthUser]'
})
export class AuthDirective implements OnInit {

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.localStorageService.data.subscribe(usr => {
      usr ? this.view.createEmbeddedView(this.template) : this.view.clear();
    });
  }
}
