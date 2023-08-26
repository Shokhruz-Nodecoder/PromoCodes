import { Schema, model } from 'mongoose';

export const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
    },
  },
  {
    timestamps: true,
  },
);

export const PromoModule = model('Products', ProductSchema);
