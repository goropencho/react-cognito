import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import userpool from "../userpool";


export const login = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        const userDetails = new CognitoUser({
            Username: email,
            Pool: userpool
        })

        return userDetails.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                console.log("login success", result)
                resolve(result);
            },
            onFailure: (err) => {
                console.log("login failure", err)
                reject(err);
            }
        })
    })
}


// export const sendCode = (email: string, code: string) => {
//     return new Promise((resolve, reject) => {
//         const userDetails = new CognitoUser({
//             Username: email,
//             Pool: userpool
//         })

//         return userDetails.confirmRegistration(code, true, (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         })
//     })
// }


export const logout = () => {
    const user = userpool.getCurrentUser();
    user.signOut();
    window.location.href = "/";
}