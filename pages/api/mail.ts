import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import * as nodemailer from "nodemailer";
import connectDB from "../../backend/Database";
import { EmailModal } from "../../backend/Models/Main.model";
import { mailValidationSchema } from "../../backend/validations/mail.validation";
// create a transporter for send mail
const transporter = nodemailer.createTransport({
    service: "SendinBlue", // no need to set host or port etc.
    auth: {
        user: process.env.SendInBlueUser,
        pass: process.env.SendInBluePass,
    },
});

const handler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
}).post(async (req, res) => {
    try {
        const data = mailValidationSchema.validateSync(req.body);
        const mail = new EmailModal(data);
        await mail.save();

        // mail options
        const mailOptions = {
            to: "samiulalimsaad@gmail.com",
            from: mail.email,
            subject: "Mail from portfolio",
            html: `
                <div>
                    <h3>Hi I'm ${mail.email},</h3>
                    <p>${mail.message}</p>
                </div>
            `,
        };

        // send mail
        await transporter
            .sendMail(mailOptions)
            .then(() => console.log("Successfully sent"))
            .catch((err: any) => console.log("Failed ", err));

        res.status(200).json({ message: "Inserted", success: true, mail });
    } catch (error) {
        res.send(error);
    }
});

export default connectDB(handler);
