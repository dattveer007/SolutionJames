const app=require('express')();
const body_parser=require('body-parser');
async function startServer(){
    const {PORTNO}=require('./config/serverConfig');
    app.use('/v1',require('./routes/index').router);
    app.use(require('express').static(__dirname));
    app.use(body_parser.urlencoded(false));
    app.use(body_parser.json());
    app.listen(PORTNO,(error)=>{
        if(error){
            throw({
                message:"Server not started",
                err:error
            })
        }
        console.log(`Server is running on ${PORTNO}`);
    })
}
startServer();