import mongoose, { Schema, models, Document } from "mongoose";

type OrderStatusType = 'pending' | 'approved' | 'active' | 'rejected' | 'completed';

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId; 
  package: mongoose.Types.ObjectId;
  packageName: string;
  packageHarga: number; 
  orderStatus: OrderStatusType;
  adminApprovalBy?: mongoose.Types.ObjectId; 
  adminApprovalDate?: Date;
  startDate: Date;
  endDate?: Date; 
  totalPaid: number;
}


const OrderSchema: Schema<IOrder> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    package: { type: Schema.Types.ObjectId, ref: "Package", required: true, index: true },
    packageName: { type: String, required: true, trim: true },
    packageHarga: { type: Number, required: true },
    orderStatus: {
      type: String,
      enum: ['pending', 'approved', 'active', 'rejected', 'completed'],
      default: "pending",
      required: true,
      index: true
    },
   
    totalPaid: {
        type: Number,
        default: 0,
        required: true,
    },
    
    adminApprovalBy: { type: Schema.Types.ObjectId, ref: "User" },
    adminApprovalDate: { type: Date },

    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
  },
  { timestamps: true }
);

export const Order = (models.Order as mongoose.Model<IOrder>) || mongoose.model<IOrder>("Order", OrderSchema);