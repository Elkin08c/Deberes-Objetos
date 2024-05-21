class Empleado {
    nombre: string;
    tareas: string[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.tareas = [];
    }

    recibirOrden(orden: string): void {
        this.tareas.push(orden);
        console.log(`${this.nombre} ha recibido la orden: ${orden}`);
    }

    mostrarTareas(): void {
        if (this.tareas.length > 0) {
            console.log(`Tareas de ${this.nombre}: ${this.tareas.join(', ')}`);
        } else {
            console.log(`${this.nombre} no tiene tareas asignadas.`);
        }
    }
}

// Creación de instancias de Empleados
const empleado1 = new Empleado("Ana");
const empleado2 = new Empleado("Luis");

// Simulación de órdenes del jefe
empleado1.recibirOrden("Preparar el informe mensual");
empleado2.recibirOrden("Actualizar la base de datos de clientes");

// Mostrar las tareas asignadas a los empleados
empleado1.mostrarTareas();
empleado2.mostrarTareas();