import mongoose, { Schema, models } from "mongoose";

const PackageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,  
      trim: true
    },

    kecepatan_mbps: {
      type: Number,     
      required: true
    },

    kuota_gb: {
      type: Number,    
      required: true
    },

    harga: {
      type: Number,     
      required: true
    },

    kapasitas_device: {
      type: Number,     
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export const Package = models.Package || mongoose.model("Package", PackageSchema);
