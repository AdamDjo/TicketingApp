import { Document } from 'mongoose';

// Type représentant les propriétés d'un document Ticket
export interface TicketTypeInput extends Document {
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  createdAt: Date;
}
export type TicketType = Omit<TicketTypeInput, keyof Document>;
