export class Matrix {
    private _rows: number[][];
  
    constructor(shape: string) {
      this._rows = shape.trim().split("\n").map(row => row.split(" ").map(Number));
    }
  
    get rows(): number[][] {
      return this._rows;
    }
  
    get columns(): number[][] {
      return this._rows[0].map((_, colIndex) => this._rows.map(row => row[colIndex]));
    }
  }
  


