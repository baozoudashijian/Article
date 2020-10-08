import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setToken, setInfo} from "../../actions";


const Home: React.FC<{token:any, info: any}> = (props) => {
    console.log(props)
    useEffect(() => {
        // @ts-ignore
        props.setToken2('456')
        // @ts-ignore
        props.setInfo2({
            username: '张荣杰',
            tel: 17679283306
        })
    }, [])
    return (
        <>
            <p>token: {props.token}</p>
            <p>username: {props.info.username}</p>
            <p>tel: {props.info.tel}</p>
        </>
    )
}

export default connect(
    //@ts-ignore
    state => ({token: state.token, info: state.info}),
    {
        setToken2: setToken,
        setInfo2: setInfo
    })(Home);