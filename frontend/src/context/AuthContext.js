import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    // user:{
    //     "_id": "6549dbd1e290eaea28fbe073",
    //     "username": "Pankaj Kalwar",
    //     "email": "pk@gmail.com",
    //     "profilePicture": "https://static.toiimg.com/thumb/msid-88137630,width-1280,resizemode-4/88137630.jpg",
    //     "coverPicture": "https://img.freepik.com/premium-photo/facebook-template-3d-illustration_665513-4.jpg",
    //     "followers": [
    //       "6547b964231ba5fcbccebc8a"
    //     ],
    //     "followings": [
    //       "6547b964231ba5fcbccebc8a",
    //       "654474b3f3e76847e961fe84",
    //       "6540add3b73632db45b81a5e"
    //     ],
    //     "isAdmin": false,
    //     "createdAt": "2023-11-07T06:40:17.440Z",
    //     "__v": 0,
    //     "city": "Sonari, Assam",
    //     "desc": "Hey I am using facebook",
    //     "relationship": 2
    //   },
    user:null,
    isFecthing:false,
    error:false,
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);
    // console.log({"state":state.user})
    return (
        <AuthContext.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}
        >
           {children}
        </AuthContext.Provider>
    )
}