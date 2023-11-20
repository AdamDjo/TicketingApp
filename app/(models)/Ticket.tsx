import { TicketType } from '@/types/ticket.type';
import mongoose, { Schema, Model } from 'mongoose';
import connectDB from '../utils/db';
// Connect to MongoDB
connectDB();
const ticketSchema = new Schema<TicketType>(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
  },
  {
    timestamps: true,
    _id: true,
  }
);

let TicketModel: Model<TicketType>;

try {
  TicketModel = mongoose.model<TicketType>('Ticket');
} catch {
  TicketModel = mongoose.model<TicketType>('Ticket', ticketSchema);
}

export default TicketModel;
