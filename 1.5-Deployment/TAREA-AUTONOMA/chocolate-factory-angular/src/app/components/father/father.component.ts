import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzCardModule],
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements AfterViewInit {
  parentMessage = 'Mensaje de Willy Wonka al Oompa Loompa';
  childMessage = '';

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  sendMessageToChild() {
    // Enviar mensaje al hijo cuando se hace clic en el botón
    this.childComponent.message = '¡Haz esta tarea ahora! (Mensaje del jefe al empleado)';
  }

  receiveMessageFromChild($event: string) {
    // Recibir mensaje del hijo
    this.childMessage = $event;
  }

  ngAfterViewInit() {
    // Establecer un mensaje inicial para el componente hijo después de que se haya inicializado
    Promise.resolve().then(() => {
      this.childComponent.message = 'Mensaje inicial desde ViewChild (Padre)';
    });
  }
}
