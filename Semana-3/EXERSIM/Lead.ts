export function isLeap(year: number): boolean {
    return (
        (year % 4 === 0 ) && (year % 100 !== 0 || year % 400 === 0)
    )
}
//LINK DE VIDEO
//https://youtu.be/JdNJpZkrN04