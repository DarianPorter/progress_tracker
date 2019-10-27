export const fetchObjectives = ()=>{
    return $.ajax({
        method: "GET",
        url: "api/objectives"
    })
}
export const createNewObjective = (objectiveInfo)=> {
    return $.ajax({
        method: "POST", 
        url: "/api/objectives",
        data: {objective: objectiveInfo}
    })
}
export const deleteObjective = (objectiveInfo)=>{
    return $.ajax({
        method: "DELETE",
        url: `/api/objectives/${objectiveInfo.id}`
    })
}