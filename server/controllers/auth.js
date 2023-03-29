import jwt from "jsonwebtoken";

/** 
 * @param {Request} req
 * @param {Response} res */
export const auth = (req, res, next)=>{
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json({ msg: "You need to login to do that!" });
    jwt.verify(token, process.env.JWT_SECRET, (err, data)=>{
        if (err) {
            res.cookie("accessToken", null, { expires: new Date(Date.now() - 1000), httpOnly: true });
            return res.status(401).json({ msg: "Invalid token. Log back in!" });
        }
        // console.log(data);
        req.uid = data?.uid;
        req.username = data?.username;
        req.coins = data?.coins;
        next();
    });
}

export const optAuth = (req, res, next)=>{
    const token = req.cookies.accessToken;
    if (!token) return next();
    jwt.verify(token, process.env.JWT_SECRET, (err, data)=>{
        if (err) {
            res.cookie("accessToken", null, { expires: new Date(Date.now() - 1000), httpOnly: true });
            return next(); // res.status(401).json({ msg: "Invalid token. Log back in!" });
        }
        req.uid = data?.uid;
        req.username = data?.username;
        req.coins = data?.coins;
        next();
    });
}
