import {createSlice} from '@reduxjs/toolkit'
import wordList from '../words.json'

const randomNum = Math.floor(Math.random() * wordList.words.length)
const initialState = {
    board: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      position: 0,
      row: 0,
      correctWord: wordList.words[randomNum].toLocaleUpperCase(),
      inGame: true,
}

export const boardSlice = createSlice({
    name: 'board',
    initialState: initialState,
    reducers: {
        setBoard: (state,action) => {
            state.board = action.payload
        },
        increasePosition: (state) => {
            state.position ++;
        },
        decreasePosition: (state) => {
            state.position --;
        },
        increaseRow: (state) => {
            state.row ++
        },
        setRow: (state,action) => {
            state.row = action.payload
        },
        setInGame: (state,action) => {
            state.inGame = action.payload
        },
       
    }
})

export const {setBoard, increasePosition, decreasePosition,increaseRow, setRow,setInGame,} = boardSlice.actions

export default boardSlice.reducer