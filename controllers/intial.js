const init=(req,res,next)=>{
    function focus(x,y){
        return 1;
    }
    function capture(x,y){
        return 1;
    }

    let posx=0;
    let posy=0;
    let arr = new Array(20);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(60);
    }
    for(let j=0; j<arr.length;j++){
        for (let i = 0; i < 60; i++) {
            arr[j][i]=0;
        }
    }
    arr[0][0]=1;
    function checkOper() {
        if (arr[posx][posy] === 0 || arr[posx][posy]==1) {
            arr[posx][posy]=2;
        focus(posx,posy);
        setTimeout(checkOper, 3000); // Wait 3 seconds before checking again
        } else if (arr[posx][posy] === 2) {
            arr[posx][posy]=3;
        capture(posx,posy);
        setTimeout(checkOper, 2000); // Wait 2 seconds before checking again
        } else {
        setTimeout(checkOper,100); // Wait 1 second before checking again
        }
    }
    checkOper();
    next();
}
module.exports={init};