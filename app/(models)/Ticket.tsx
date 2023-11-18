import mongoose, { Schema } from 'mongoose';
import { TicketType } from '../../types/ticket.type';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema<TicketType>(
  {
    title: String,
    description: String,
    category: String,
    priority: String,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket =
  mongoose.models.Tickets || mongoose.model('Ticket', ticketSchema);
export default Ticket;
