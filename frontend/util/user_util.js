export const loginUser = (loginInfo)=>{
    return $.ajax({
        method: "POST",
        url: "api/session",
        data: {user: loginInfo}
    })
}
export const logoutUser = ()=>{
    return $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
}