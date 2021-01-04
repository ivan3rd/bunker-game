class player{
    constructor(socketID,charsheet){
        this.socketID=socketID;
        this.name='player'+Math.random();
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