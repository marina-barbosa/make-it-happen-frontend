import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

interface PaymentInfo {
  qrCode: string;
  pixKey: string;
  idVaquinha: string;
  idTransaction: string;
  date: string;
  email: string;
  value: number;
}
@Component({
  selector: 'app-pix-payment-confirmation',
  templateUrl: './pix-payment-confirmation.component.html',
  styleUrls: ['./pix-payment-confirmation.component.scss']
})
export class PixPaymentConfirmationComponent {
  @Input() paymentInfo: PaymentInfo = {
    qrCode: '/placeholder.svg?height=256&width=256',
    pixKey: 'npqrinter939769792126304CE1B',
    idVaquinha: '5213366',
    idTransaction: '28809793',
    date: '21/11/2024',
    email: 'puricute_@hotmail.com',
    value: 30.99
  };

  copied = false;

  constructor(private clipboard: Clipboard) { }

  copyPixCode() {
    this.clipboard.copy(this.paymentInfo.pixKey);
    this.copied = true;

    // Reset copied state after 3 seconds
    setTimeout(() => {
      this.copied = false;
    }, 3000);
  }
}
