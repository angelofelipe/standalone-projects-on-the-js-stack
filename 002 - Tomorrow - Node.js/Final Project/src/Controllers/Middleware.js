import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
   const cookie = req.cookies;
   if (!cookie) return res.status(403).send({ message: "No cookies sent. Please log in to receive authenticated cookies.." });
   const userId = jwt.decode(cookie.acess_t).userId;
   req.userId = userId;

   try {
      jwt.verify(cookie.acess_t, process.env.ACESS_TOKEN_KEY);
      next();
   } catch (e) {
      jwt.verify(cookie.refresh_t, process.env.REFRESH_TOKEN_KEY, (err, user) => {
        if (err) return res.status(401).send(err);
        const token = jwt.sign({ userId: user.id }, process.env.ACESS_TOKEN_KEY, { expiresIn: 10 });
        res.cookie("acess_t", token);
        next();
      });
   }
}