// const connectDB = (handler) => async (req, res) => {
//     if (mongoose.connections[0].readyState) {
//         // Use current db connection
//         return handler(req, res);
//     }
//     // Use new db connection
//     await mongoose.connect(process.env.mongodburl, {
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//         useNewUrlParser: true,
//     });
//     return handler(req, res);
// };

import { NextApiRequest, NextApiResponse } from "next";
import { NextConnect } from "next-connect";

const connectDB =
    (handler: NextConnect<NextApiRequest, NextApiResponse<any>>) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        console.log("connected");
        return handler(req, res);
    };

export default connectDB;
