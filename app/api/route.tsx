import Ticket from '../(models)/Ticket';
import { TicketType } from '@/types/ticket.type';
import { NextResponse } from 'next/server';

export async function POST(req: any) {
  try {
    const body = await req.json();
    const ticketData: TicketType = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json({ message: 'Ticket created' }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'ERROR', error }, { status: 500 });
  }
}
