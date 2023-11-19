import TicketModel from '@/app/(models)/Ticket';
import { TicketType } from '@/types/ticket.type';

import { NextResponse } from 'next/server';
/*create ticket*/
export async function POST(
  req: any
): Promise<NextResponse<{ message: string }>> {
  try {
    const body = await req.json();
    const ticketData: TicketType = body.formData;
    await TicketModel.create(ticketData);
    return NextResponse.json({ message: 'Ticket created' }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error in POST request', error },
      { status: 500 }
    );
  }
}
/*get ticket*/

export async function GET(): Promise<
  NextResponse<{ tickets: TicketType[] } | { message: string }>
> {
  try {
    const tickets = await TicketModel.find();
    // Utilisez map pour convertir chaque document en un objet de type TicketType

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error in GET request', error },
      { status: 500 }
    );
  }
}
