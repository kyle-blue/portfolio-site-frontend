// Contains things you might want to do on load of the app without 
// causing risk of re-rendering all child components
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function OnLoad(): React.ReactElement {
    const dispatch = useDispatch()

    useEffect(() => {
        const runOnLoad = async () => {
        }
        runOnLoad()
    }, [])

    return (
        <></>
    );
  }
  
  export default OnLoad;
  