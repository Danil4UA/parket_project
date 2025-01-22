import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  productId: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  category: string;
  stock: number;
  discount: number;
  isAvailable: boolean;
  color: string;
  type: string;
  material: string;
  countryOfOrigin: string;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: true },
    color: { type: String, required: true },
    type: { type: String, required: true },
    material: { type: String, required: true },
    countryOfOrigin: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
