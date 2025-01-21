import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

type FormData = {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
};

export async function POST(req: NextRequest) {
  try {
    const { nome, cognome, email, telefono }: FormData = await req.json();

    const msg = {
      to: "destinatario@example.com", // Sostituisci con l'indirizzo email del destinatario
      from: "tuoemail@example.com",  // Sostituisci con il tuo indirizzo verificato su SendGrid
      subject: "Nuova iscrizione ricevuta",
      text: `Nome: ${nome}, Cognome: ${cognome}, Email: ${email}, Telefono: ${telefono}`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
