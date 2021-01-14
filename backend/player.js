class player{
    constructor(socketID, playerName,charsheet){
        this.socketID=socketID;
        this.name=playerName;
        this.charsheet=this.addingCharsheet(charsheet)
    }

    addingCharsheet(charsheet=[]){
        let modifiedCharsheet=[];
        charsheet.forEach(item =>{
            modifiedCharsheet.push([item+'',false]) 
        })
        return modifiedCharsheet;
    }
}
module.exports = player