import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDiaryData, IDiaryEntry } from '../models/Diary'
import { dateToYMD } from '../utils/dates'



const initialState: IDiaryData = {}

export const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        addDay: (state, action: PayloadAction<IDiaryEntry>) => {
            const {year, month, day} = dateToYMD(action.payload.date)
            state[year] = state[year] || {}
            state[year][month] = state[year][month] || {}
            state[year][month][day] = action.payload
        }
    }
})

export const {addDay} = diarySlice.actions

export default diarySlice.reducer
