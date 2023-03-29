export const resWrap = (fn=async ()=>[200, "", {}])=>{
    return async (req, res, next)=>{
        const result = await fn(req, res, next);
        // console.log(result);
        const [status, msg, data] = result;
        res.status(status).json({ msg, ...data });
    }
}