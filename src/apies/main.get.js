import React, {useState,useEffect} from 'react';
import getApi from "../servives/services.api.get";
import Tables from "./main.tables";
import '../App.css'
const MainGet = () => {

    let [api, getAp]= useState([])


    useEffect(()=>{
        getApi().then(value =>
            getAp(value))
    },[])




    return (
        <div className={'boxAll'} >

            {

                api.filter(({launch_year}) => launch_year!=='2020').map(user=>(<Tables item={user}/>

                ))

            }

        </div>
    );
};

export default MainGet;