import {Component, ContentChild, EventEmitter, Output, TemplateRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  @Output() closeEvent = new EventEmitter<boolean>();

  @ContentChild('header')
  header?: TemplateRef<unknown>;
  @ContentChild('body')
  body?: TemplateRef<unknown>;
  @ContentChild('footer')
  footer?: TemplateRef<unknown>;

  closeModal(value: boolean) {
    this.closeEvent.emit(value);
  }
}
