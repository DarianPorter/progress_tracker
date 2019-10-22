export const fetchObjectives = ()=>{
    return $.ajax({
        method: "GET",
        url: "api/objectives"
    })
}