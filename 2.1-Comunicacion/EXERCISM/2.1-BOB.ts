
export const hey = (input: string): string => {
    const speech = input.trim()
    if (speech == "") return "Fine. Be that way!"
    
    const isQuestion = speech.endsWith("?")
    const isShout = /[A-Z]+/.test(speech) && speech == speech.toUpperCase()
    
    if (isShout && isQuestion) return "Calm down, I know what I'm doing!"
    if (isShout) return "Whoa, chill out!"
    if (isQuestion) return "Sure."
    return "Whatever."
  }

