interface boardState {
    board: string[],
    position: number,
    row: number,
    correctWord: string,
    inGame: boolean,
    correct: boolean,
    almost: boolean,
    wrong: boolean
}

export interface rootState {
    board: boardState
}