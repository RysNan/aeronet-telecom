import mongoose, { Schema, models, Document } from "mongoose";
import { IOrder } from './Order';

type PaymentStatusType = 'unpaid' | 'pending' | 'paid' | 'failed' | 'refunded';

export interface IPayment extends Document {
  order: mongoose.Types.ObjectId | IOrder; 
  
  amount: number; 
  paymentMethod: string;
  transactionId: string; 
  paymentStatus: PaymentStatusType;
  paymentApprovalBy?: mongoose.Types.ObjectId;
  paymentApprovalDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}


const PaymentSchema: Schema<IPayment> = new Schema(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order", 
      required: true,
      index: true
    },

    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
    paymentStatus: {
      type: String,
      enum: ['unpaid', 'pending', 'paid', 'failed', 'refunded'],
      default: "pending", 
      required: true,
    },

    paymentApprovalBy: { type: Schema.Types.ObjectId, ref: "User" },
    paymentApprovalDate: { type: Date },
  },
  { timestamps: true }
);

export const Payment = (models.Payment as mongoose.Model<IPayment>) || mongoose.model<IPayment>("Payment", PaymentSchema);