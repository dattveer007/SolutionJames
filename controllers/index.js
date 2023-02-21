const getPos=(req,res)=>{
    res.sendFile(__dirname+'./home.html');
    // res.status(200).json({
    //     success:"true",
    // })
}
const postPos=(req,res)=>{
    const keyCode = req.body.code;
    const keyValue = req.body.value;
    let arrowpressed=keyValue;
    if (arrowpressed=='ArrowLeft'){
        posy-=1;
        if (posy<0)
        {
            posy+=1;
        }

    }else if(arrowpressed=='ArrowRight'){
        posy+=1;
        if (posy>=60)
        {
            posy-=1;
        }
    }
    else if(arrowpressed=='ArrowUp'){
        posx-=1;
        if (posx<0)
        {
            posx+=1;
        }
    }
    else if(arrowpressed=='ArrowDown'){
        posx+=1;
        if (posx>=20)
        {
            posx-=1;
        }
    }
    if (arr[posx][posy]==0){
        arr[posx][posy]=1;
    }
    
    res.status(200).json({ 
    array: arr, 
    x: posx, 
    y: posy });
}
module.exports={
    getPos,postPos
}