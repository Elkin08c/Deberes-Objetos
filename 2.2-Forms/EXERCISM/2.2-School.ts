export class GradeSchool {
    private db: Record<string, number>
    constructor() {
    this.db = {}
    }
    
    roster() {
    const result: Record<number, string[]> = {}
    for (let [student, grade] of Object.entries(this.db)) {
        result[grade] = result[grade] ? [...result[grade], student].sort() : [student]
    }
    return result
    }
    add(student: string, grade: number) {
    this.db[student] = grade
    }
    grade(key: number) {
    const result: string[] = []
    for (let [student, grade] of Object.entries(this.db)) {
        if (grade === key) {
        result.push(student)
        }
    }
    return result.sort()
    }
}