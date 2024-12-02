const jsonserver=require('json-server')

const userserver=jsonserver.create()

const  router=jsonserver.router('db.json')

const middleware=jsonserver.defaults()

const Port=4000||process.env.Port

userserver.use(middleware)
userserver.use(router)
userserver.listen(Port,()=>{
    console.log(`server is running on port${Port}`);
    
})