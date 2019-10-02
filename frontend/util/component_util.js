export const handleChange = (instance, e, key)=>{
    instance.setState({[key]: e.target.value});
}
// export const handleSubmit = (action, actionData)=>{
//     console.log("submit")
//     return action(actionData)
// }   