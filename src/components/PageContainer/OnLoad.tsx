// Contains things you might want to do on load of the app without 
// causing risk of re-rendering all child components
import React, { useEffect } from 'react';
import { AccountsApi, CurrentAccountResponse } from '../../api_helpers/accounts';
import { useDispatch } from 'react-redux';
import { setAccount } from '../../redux/reducers/account';


function OnLoad(): React.ReactElement {
    const dispatch = useDispatch()

    useEffect(() => {
        const runOnLoad = async () => {
            const response = await AccountsApi.getCurrentAccount()
            if (response.status === 200) {
                const currentAccount = response.data as CurrentAccountResponse
                dispatch(setAccount(currentAccount))
            }
        }
        runOnLoad()
    }, [])

    return (
        <></>
    );
  }
  
  export default OnLoad;
  