export default async function handler(req, res) {
  if (req.method === 'POST') {

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      from: process.env.SENDGRID_SENDER,
      to: process.env.SENDGRID_SENDER,
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

    await sgMail.send(message);
    return res.status(200).end();
  }

  return res.status(405).end();
}