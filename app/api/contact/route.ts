import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nombre, email, mensaje } = body;

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Campos requeridos faltantes.' }, { status: 400 });
  }

  // TODO: integrar Resend o Nodemailer para envío real
  console.log('Nuevo mensaje de contacto:', body);

  return NextResponse.json({ ok: true });
}
