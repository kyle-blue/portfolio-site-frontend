import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '..'

type CurrentAccount = Record<string, any>

interface AccountState {
    currentAccount?: CurrentAccount
}

const initialState: AccountState = {
    currentAccount: undefined
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAccount: (state, {payload}: PayloadAction<CurrentAccount>) => {
            state.currentAccount = payload
        },
    },
})

export const {setAccount} = accountSlice.actions
export const actions = accountSlice.actions
export const useAccountSelector = (func: (account: AccountState) => any): any => {
    return useSelector<RootState>((state) => func(state.account))
}
export default accountSlice.reducer 