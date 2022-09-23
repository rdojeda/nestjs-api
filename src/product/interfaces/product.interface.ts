import { Document } from 'mongoose';

export interface Product extends Document {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly createdAt: Date;
}
