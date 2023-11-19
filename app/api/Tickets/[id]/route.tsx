import TicketModel from '@/app/(models)/Ticket';
import { TicketType } from '@/types/ticket.type';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: any,
  { params }: any
): Promise<NextResponse<{ message: string }>> {
  try {
    const { id } = params;
    await TicketModel.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Ticket Deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
