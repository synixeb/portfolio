import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-qr',
    templateUrl: './qr.html',
    styleUrl: './qr.scss',
    standalone: true
})
export class QRComponent implements OnInit {
    qrCodeData: string = 'https://www.youtube.com/watch?v=7jYGNkGZxgY';
    
    ngOnInit(): void {
        if (typeof window !== 'undefined') {
            window.location.href = this.qrCodeData;
        }
    }

    open(): void {
        if (typeof window !== 'undefined') {
            window.open(this.qrCodeData, '_blank', 'noopener');
        }
    }
}
