import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "40a36a984fc0be",
      pass: "6d60f3000eec72"
    }
  });


export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <teste@hotmail.com>',
            to: 'Rafael Mendes <rafaelbemvindo@hotmail.com>',
            subject,
            html: body,
        })
    };
}