import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isACMAuth = token.length < 500;

    let decodedData;

    if (token && isACMAuth) {
      decodedData = jwt.verify(token, process.env.CLIENT_SECRET);

      req.userId = decodedData?.id;
    } else {
      // Google token case
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub; // Google's unique id
    }

    // After auth middleware confirms user authorization proceed with next action
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
