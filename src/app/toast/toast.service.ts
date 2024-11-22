import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts$ = new BehaviorSubject<any[]>([]);

  getToasts() {
    return this.toasts$.asObservable();
  }

  showToast(message: string, type: 'success' | 'error' | 'warn' | 'info' = 'info', duration: number = 3000) {
    const id = Date.now();
    const toast = { id, message, type };

    const currentToasts = this.toasts$.getValue();
    this.toasts$.next([...currentToasts, toast]);

    setTimeout(() => {
      this.removeToast(id);
    }, duration);
  }

  removeToast(id: number) {
    const currentToasts = this.toasts$.getValue();
    this.toasts$.next(currentToasts.filter(toast => toast.id !== id));
  }
}
