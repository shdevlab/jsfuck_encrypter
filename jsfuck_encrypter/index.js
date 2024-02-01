const jsfuck_data = require("./data.js")

function replaceWords(words){
    return words.split("").map(e=>{
        if(/\d/.test(e)) return e
        return jsfuck_data.words[e] || "String['fromCharCode']("+e.charCodeAt()+")"
    }).join("+").replace(/(\d(\+\d)*\+\d)/g, function(x){return x.replace(/\+/g, "")});
}

module.exports = function(str, isScript){
    let result = String(str)

    result = replaceWords(result)

    if(isScript) result = "Function("+result+")()"

    while(result.includes("'")) result = result.split("'").map((e, i)=>{
        if(i%2){
            return replaceWords(e)
        }else{
            return e
        }}).join("");

    for(var i in jsfuck_data.constructors) result = result.replace(new RegExp(i, "g"), jsfuck_data.constructors[i]+"['constructor']")
    result = result.replace(/Function/g, jsfuck_data.constructors.Function+"['constructor']")

    while(result.includes("'")) result = result.split("'").map((e, i)=>{
        if(i%2){
            return replaceWords(e)
        }else{
            return e
        }}).join("");

    for(var i in jsfuck_data.defualts) result = result.replace(new RegExp(i, "g"), jsfuck_data.defualts[i])

    result = result.replace(/\d+/g, function(x){
        return x.split("").map((e,i)=>{
            if(i == 0){
                return "("+jsfuck_data.words[e]+")"
            }else{
                return "["+jsfuck_data.words[e]+"]"
            }
        }).join("+")
    })

    return result
}
