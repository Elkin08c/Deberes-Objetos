export function toRna(sequence: string): string {
    return sequence
    .split('')
    .map(nucleotide => {
        switch(nucleotide) {
        case 'G':
            return 'C'
        case 'C':
            return 'G'
        case 'T':
            return 'A'
        case 'A':
            return 'U'
        default:
            throw new Error('Invalid input DNA.')
        }
    })
    .join('')
}

//Link del video
//https://youtu.be/d_EQ4AW4C0g