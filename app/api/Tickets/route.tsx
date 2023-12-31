import TicketModel from '@/app/(models)/Ticket';
import connectDB from '@/utils/db';

import { TicketType } from '@/types/ticket.type';

import { NextResponse } from 'next/server';
/*create ticket*/

export async function POST(
  req: any
): Promise<NextResponse<{ message: string }>> {
  try {
    await connectDB();
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

/*get List of ticket*/

export async function GET(): Promise<
  NextResponse<{ tickets: TicketType[] } | { message: string }>
> {
  try {
    await connectDB();
    const tickets = await TicketModel.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error in GET request', error },
      { status: 500 }
    );
  }
}
