import { Component } from '@angular/core';
import { ToastService } from './toast.service';
  // alert
  // info
  // error
  // warn
@Component({
  selector: 'app-toast',
  template: `
    <div class="toast-custom toast toast-end bottom-10 right-10 space-y-4 px-4">
      <div
        *ngFor="let toast of toasts"
        class="toast alert alert-{{ toast.type }} shadow-lg"
      >
        <span>{{ toast.message }}</span>
      </div>
    </div>
  `,
  styles: [`
    .toast-custom { z-index: 9999 !important; }
    .alert-error { @apply bg-red-500 text-white; }
    .alert-warn { @apply bg-orange-500 text-white; }
  `]
})
export class ToastComponent {
  toasts: any[] = [];

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toastService.getToasts().subscribe(toasts => {
      this.toasts = toasts;
    });
  }
}
