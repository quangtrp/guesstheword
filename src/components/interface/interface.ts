interface boardState {
    board: string[],
    position: number,
    row: number
}

export interface rootState {
    board: boardState
}