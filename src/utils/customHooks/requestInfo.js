import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useRequestInfo = (url) => {
  const [data, setData] = useState(null);
  const {authToken, userUUID} = useSelector(state => state.auth)  
    useEffect(()=>{
        let d = {
            userUUID, 
            authToken, 
        }
        setData(d);
    }, [authToken, userUUID])
  return [data];
};

export const oAuthRequest = (url) => {
    const [data, setData] = useState(null);
  const {authToken, userUUID} = useSelector(state => state.auth)  
    useEffect(()=>{
        let d = {
            RequestInfo: {
                apiId: "string",
                ver: "string",
                ts: 0,
                action: "string",
                did: "string",
                key: "string",
                msgId: "string",
                requesterId: "string",
                authToken: "string",
              },
              Login: {
                username: email, // "string",
                password: password, //"string",
                grantType: "string",
                userType: "CLINICIAN",
              }, 
        }
        setData(d);
    }, [authToken, userUUID])
  return [data];
};
