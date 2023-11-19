import { Document } from 'mongoose';

// Type représentant les propriétés d'un document Ticket
export interface TicketType extends Document {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  createdAt: Date;
}
