export default async function handler(req, res) {
  const recipientsString = req.body.recipients.join(',')
  if (req.method === 'POST') {

    var nodemailer = require("nodemailer");

    var smtpTransport = nodemailer.createTransport({
      host: "mail.smtp2go.com",
      port: 2525, // 8025, 587 and 25 can also be used.
      auth: {
        user: process.env.SMTP2GO_USER,
        pass: process.env.SMTP2GO_PASSWORD,
      },
    });

    smtpTransport.sendMail({
      from: `Formulário Site <${process.env.SMTP2GO_SENDER}>`,
      to: recipientsString,
      /* envelope: {
        from: `${process.env.SMTP2GO_SENDER}`,
        to: req.body.recipients,
      }, */
      subject: `Nova Mensagem | Website Pegada Neutra`,
      text: `Nova mensagem enviada de ${req.body.name}`,
      html: `
                <div>Você recebeu uma nova mensagem no seu site. Confira as informações abaixo:</div>
                <p><strong>Nome</strong>: ${req.body.name}</p>
                <p><strong>Empresa</strong>: ${req.body.business}</p>
                <p><strong>Telefone</strong>: ${req.body.phone}</p>
                <p><strong>Email</strong>: ${req.body.email}</p>
                <p><strong>Assuntos de Interesse</strong>: ${req.body.subjects}</p>
              `
    },
      function (error, response) {
        if (error) {
          console.error('Ocorreu um erro ao enviar o e-mail de contato:');
          console.error(error);
          console.error(error?.response?.body);
          return res.status(500).json({ message: error?.response?.body?.errors?.[0]?.message });
        } else {
          return res.status(200).end(); // TESTAR O ENVIO PARA O EMAIL PESSOAL!!!!!!!!!!!!!
        }
      }
    );

    /* const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      from: process.env.SENDGRID_SENDER,
      to: req.body.recipients,
      subject: `Nova Mensagem | Website Pegada Neutra`,
      text: `Nova mensagem enviada de ${req.body.name}`,
      html: `
                <div>Você recebeu uma nova mensagem no seu site. Confira as informações abaixo:</div>
                <p><strong>Nome</strong>: ${req.body.name}</p>
                <p><strong>Empresa</strong>: ${req.body.business}</p>
                <p><strong>Telefone</strong>: ${req.body.phone}</p>
                <p><strong>Email</strong>: ${req.body.email}</p>
                <p><strong>Assuntos de Interesse</strong>: ${req.body.subjects}</p>
              `
    }

    try {
      await sgMail.send(message);
      // await Promise.all(messages)
    }
    catch (e) {
      console.error('Ocorreu um erro ao enviar o e-mail de contato:');
      console.error(e);
      console.error(e?.response?.body);
      return res.status(500).json({ message: e?.response?.body?.errors?.[0]?.message });
    }

    return res.status(200).end(); */
  }

  else {
    return res.status(405).end();
  }
}