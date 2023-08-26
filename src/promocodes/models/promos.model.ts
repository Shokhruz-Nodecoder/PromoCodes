import { Schema, model } from 'mongoose';

export const PromoSchema = new Schema(
  {
    promo: {
      type: String,
      required: true,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

export const PromoModule = model('PromoCodes', PromoSchema);
