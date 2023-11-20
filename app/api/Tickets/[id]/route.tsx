import TicketModel from '@/app/(models)/Ticket';
import connectDB from '@/app/utils/db';
import { TicketType } from '@/types/ticket.type';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: any,
  { params }: any
): Promise<NextResponse<{ message: string }>> {
  try {
    await connectDB();
    const { id } = params;
    await TicketModel.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Ticket Deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function GET(
  req: any,
  { params }: any
): Promise<
  NextResponse<{ foundTicket: TicketType | null } | { message: string }>
> {
  try {
    await connectDB();
    const { id } = params;
    const foundTicket = await TicketModel.findOne({ _id: id });
    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function PUT(
  req: any,
  { params }: any
): Promise<NextResponse<{ message: string }>> {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;
    const updateTicketData = await TicketModel.findByIdAndUpdate(id, {
      ...ticketData,
    });
    console.log('put runing', ticketData);
    return NextResponse.json({ message: 'Ticket Updated' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
