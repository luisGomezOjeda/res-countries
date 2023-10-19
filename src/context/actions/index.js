export const serchEs = (name) => {
    return ({type : "SERCH_ES", payload : {name}})
}

export const serchEn = (url) => {
    return ({type : "SEARCH_EN", payload : {url}})
}
