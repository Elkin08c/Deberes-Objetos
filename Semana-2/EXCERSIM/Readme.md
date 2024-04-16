1-Resistor-Color-Duo


Aquí está el desglose del código:

const resistances: Esta es una matriz que contiene los colores que se utilizan para codificar los valores de resistencia. Cada color está en el orden en el que aparece en el código de colores estándar, donde cada color representa un dígito del valor de resistencia.

export const decodedValue = ([first, last]: Array<string>) => {...}: Esta es una función llamada decodedValue que está exportada, lo que significa que puede ser utilizada fuera de este módulo si se importa. La función toma un array de dos elementos que representan los colores de las dos primeras bandas del resistor.

[first, last]: Array<string>: Esta parte del código utiliza la desestructuración de arrays para extraer los dos primeros elementos del array que se pasa como argumento a la función. Estos elementos representan los colores de las dos primeras bandas del resistor.

const value = [first, last].reduce((prev, color) => prev + resistances.indexOf(color), "");: En esta línea, se utiliza el método reduce en el array que contiene los colores de las dos primeras bandas del resistor. Para cada color, se encuentra su índice en el array resistances y se suma al valor acumulado. El segundo argumento pasado a reduce es una cadena vacía "", que inicializa el valor acumulado.

return Number(value);: Por último, la función convierte el valor acumulado (que es una cadena de caracteres) a un número utilizando Number() y lo devuelve.

2-Resistor-Color-Trio
Este código es otra implementación en TypeScript/JavaScript de una función llamada `decodedResistorValue`, que toma un array de tres colores que representan las bandas de un resistor y devuelve el valor de resistencia decodificado en ohmios con un prefijo de unidad (kilo, mega, giga) si es aplicable.

Aquí está el desglose del código:

1. `const ColorAry`: Esta es una matriz que contiene los colores que se utilizan para codificar las bandas de un resistor. La palabra clave `as const` se utiliza aquí para indicar a TypeScript que el array es de tipo "literal", lo que significa que TypeScript inferirá y mantendrá la relación exacta entre los valores y sus tipos en tiempo de compilación.

2. `export type Color = typeof ColorAry[number];`: Esto define un tipo `Color` que es una unión de todos los tipos de elementos en el array `ColorAry`. Esto permite que la función `decodedResistorValue` acepte únicamente valores válidos de colores como argumentos.

3. `const ohms`: Esta es una matriz que contiene pares de valores `[divisor, prefix]`, donde `divisor` es el valor numérico que indica el divisor de la resistencia (como 1_000_000_000 para gigaohms), y `prefix` es el prefijo de unidad asociado (como "giga"). La palabra clave `as const` se utiliza aquí también para definir la matriz como literal.

4. `export function decodedResistorValue([band1, band2, band3]: Color[]): string { ... }`: Esto define una función llamada `decodedResistorValue` que toma un array de tres colores como argumento, representando las tres bandas del resistor. El tipo de argumento se especifica como un array de `Color`. La función devuelve una cadena que representa el valor de la resistencia decodificado en ohmios.

5. `let num = (ColorAry.indexOf(band1) * 10 + ColorAry.indexOf(band2)) * 10 ** ColorAry.indexOf(band3);`: En esta línea, se calcula el valor numérico de la resistencia utilizando los índices de los colores en el array `ColorAry` y aplicando las reglas del código de colores de resistencia.

6. `const [divisor, prefix] = ohms.find(([divisor]) => num >= divisor) ?? [1, ""];`: Aquí se busca en el array `ohms` el par `[divisor, prefix]` donde `num` sea mayor o igual que `divisor`. Si se encuentra, se desestructura ese par en `divisor` y `prefix`, de lo contrario, se utiliza `[1, ""]` como valor predeterminado.

7. `return `${num / divisor} ${prefix}ohms`;`: Finalmente, se devuelve una cadena formateada que representa el valor de la resistencia dividiendo `num` por `divisor` y añadiendo el prefijo de unidad si es aplicable.

video de youtube
https://youtu.be/Jhfci1V-QQQ