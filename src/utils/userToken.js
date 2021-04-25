export const getUserToken = () => {
    let userToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    if (userToken && userToken.accessToken && userToken.accessToken.accessToken) {
        return userToken.accessToken.accessToken;
    }
    return null;
}