import { TicketType } from '@/types/ticket.type';
import mongoose, { Schema, Model } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
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
