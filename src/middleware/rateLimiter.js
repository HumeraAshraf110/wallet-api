// import ratelimit from "../config/upstash";
import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
   
 try{
    //here we just kespt it simple.
    //in real world application-world-application you'd like 
    // to put the userId or ip address as your key
         const { success } = await ratelimit.limit("my-rate-limit");
if(!success) {
    return res.status(429).json({message:"Too many requests , please try again later.",});
}
 
next();

    }catch(error) {

    console.log("Rate limit error",error);
    next(error);
     }
};
export default rateLimiter;
 