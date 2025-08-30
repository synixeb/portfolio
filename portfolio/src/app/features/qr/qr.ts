import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-qr',
    templateUrl: './qr.html',
    styleUrls: ['./qr.scss'],
    standalone: true
})
export class QRComponent implements OnInit {
    qrCodeData: string = '';
    
    ngOnInit(): void {
        if (this.qrCodeData !== '') {
            window.location.href = this.qrCodeData;
        }
    }

    open(): void {
        if (this.qrCodeData !== '') {
            window.open(this.qrCodeData, '_blank', 'noopener');
        }
    }
}
