import TicketModel from '@/app/(models)/Ticket';
import { TicketType } from '@/types/ticket.type';
import { NextResponse } from 'next/server';
/*create ticket*/
export async function POST(req: any) {
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

export async function GET() {
  try {
    const tickets = await TicketModel.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error in GET request', error },
      { status: 500 }
    );
  }
}
