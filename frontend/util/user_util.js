export const loginUser = (loginInfo)=>{
    return $.ajax({
        method: "POST",
        url: "api/session",
        data: {user: loginInfo}
    })
}