import { NextRequest, NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  const { nome, cognome, email, telefono, message } = await req.json();

  try {
    await sendgrid.send({
      to: 'lau.croce@gmail.com', // Replace with your email
      from: 'commerciale@cidielle.com', // Replace with your verified sender email
      subject: 'Nuova richiesta di informazioni',
      html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Cognome:</strong> ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Messaggio:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email inviata con successo!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Errore durante l\'invio dell\'email.' }, { status: 500 });
  }
}