export class Robot {
    private _name: string; // Nombre del robot, solo accesible dentro de esta clase
    private static _reservedNames: Set<string> = new Set(); // Conjunto de nombres usados

    constructor() {
        this._name = this.generateName(); // Al crear un robot, se le asigna un nombre único
    }

    // Método para obtener el nombre del robot
    public get name(): string {
        return this._name;
    }

    // Genera un nombre único que no esté en _reservedNames
    private generateName(): string {
        let name: string;
        do {
            name = this.createRandomName(); // Crea un nombre aleatorio
        } while (Robot._reservedNames.has(name)); // Repite si el nombre ya está usado
        
        Robot._reservedNames.add(name); // Guarda el nombre como usado
        return name;
    }

    // Crea un nombre aleatorio en formato AA000 (dos letras y tres números)
    private createRandomName(): string {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digits = '0123456789';

        // Elige dos letras aleatorias
        let name = '';
        for (let i = 0; i < 2; i++) {
            name += letters[Math.floor(Math.random() * letters.length)];
        }

        // Elige tres dígitos aleatorios
        for (let i = 0; i < 3; i++) {
            name += digits[Math.floor(Math.random() * digits.length)];
        }

        return name;
    }

    // Método para cambiar el nombre del robot
    public resetName(): void {
        this._name = this.generateName(); // Asigna un nuevo nombre único
    }

    // Método para liberar todos los nombres usados
    public static releaseNames(): void {
        Robot._reservedNames.clear(); // Limpia el conjunto de nombres usados
    }
}
