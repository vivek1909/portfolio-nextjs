import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { FormValues } from "../../types/contact";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

type Data = {
  message: string;
};

const send = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const { name, email, message }: FormValues = req.body;

    const msg = {
      to: "vivekmittal199@gmail.com",
      from: "vivekmittal199@gmail.com",
      subject: `${name.toUpperCase()} sent you a message`,
      text: `Email => ${email}`,
      html: `<strong>${message}</strong>`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "message sent successfully" });
    } catch (error) {
      res.status(404).json({ message: "something went wrong" });
    }
  }
};

export default send;
