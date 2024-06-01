import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() dismiss = new EventEmitter<void>();
  constructor(private elemantRef: ElementRef) {}
  ngOnInit(): void {
    document.body.appendChild(this.elemantRef.nativeElement);
  }
  ngOnDestroy(): void {
    this.elemantRef.nativeElement.remove();
  }
  onDismissClick(): void {
    this.dismiss.emit();
  }
}
