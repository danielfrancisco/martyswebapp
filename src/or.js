import data from "./data.json"
export var or=[]
    
for(var i in data){
    for(var j in data[i]){
        if(j==="price"){
           or.push(data[i][j])
        }
    }
}