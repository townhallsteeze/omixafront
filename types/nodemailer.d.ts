declare module "nodemailer" {
  type Attachment = {
    filename?: string;
    content?: Buffer;
    contentType?: string;
  };

  type TransportOptions = {
    host?: string;
    port?: number;
    secure?: boolean;
    tls?: {
      rejectUnauthorized?: boolean;
    };
    auth?: {
      user?: string;
      pass?: string;
    };
  };

  type MailOptions = {
    from?: string;
    to?: string;
    replyTo?: string;
    subject?: string;
    text?: string;
    html?: string;
    attachments?: Attachment[];
  };

  const nodemailer: {
    createTransport(options: TransportOptions): {
      sendMail(options: MailOptions): Promise<unknown>;
    };
  };

  export default nodemailer;
}
