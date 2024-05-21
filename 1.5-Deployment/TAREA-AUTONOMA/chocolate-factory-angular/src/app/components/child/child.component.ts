import { Component, Input, Output, EventEmitter, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzCardModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit {
  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  @ContentChild('projectedContent', { static: true }) projectedContent!: ElementRef;

  sendMessageToBoss() {
    // Enviar un mensaje al jefe
    this.messageEvent.emit('¡Tarea completada! (Mensaje del empleado al jefe)');
  }

  ngAfterContentInit() {
    if (this.projectedContent) {
    console.log('Mensaje recibido del jefe:', this.projectedContent.nativeElement.textContent);
    }
  }
}
