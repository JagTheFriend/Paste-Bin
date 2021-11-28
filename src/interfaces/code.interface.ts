import { Document } from 'mongoose';

export interface Code extends Document {
  value: string;
}
