import { Document } from 'mongoose';

// Type représentant les propriétés d'un document Ticket
export interface TicketTypeInput extends Document {
  title: string;
  description: string;
  priority: number;
  progress: number;
  status: string;
  category: string;
}
export type TicketType = Omit<TicketTypeInput, keyof Document>;
