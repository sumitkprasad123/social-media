export const LoginStart = (userCrediential) => ({
    type:"LOGIN_START",

});

export const LoginSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    payload:user,
});


export const LoginFaliure = (error) => ({
    type:"LOGIN_FAILURE",
    payload:error,  
});