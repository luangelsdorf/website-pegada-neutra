export default async function handler(req, res) {
  if (req.method === 'POST') {

    const sgMail = require('@sendgrid/mail');
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

    return res.status(200).end();
  }

  return res.status(405).end();
}