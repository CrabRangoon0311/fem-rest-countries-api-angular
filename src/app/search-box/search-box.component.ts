import { Component, DestroyRef, EventEmitter, inject, input, Input, Output, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { NgModel } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  private readonly destroyRef = inject(DestroyRef);

  placeHolder = input("");
  containerClass = input("");

  @Input()
  searchText: string = "";

  @Output()
  searchTextChange = new EventEmitter<string>();

  @ViewChild("searchField")
  searchField!: NgModel

  ngAfterViewInit() {
    this.searchField?.valueChanges?.pipe(
      takeUntilDestroyed(this.destroyRef),
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(searchText => {
      this.searchTextChange.emit(searchText);
    });
  }
}
