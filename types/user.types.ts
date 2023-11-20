import { Document } from 'mongoose';

// Type représentant les propriétés d'un document Ticket
export interface UserType extends Document {
  name: string;
  email: string;
  password: string;
}
