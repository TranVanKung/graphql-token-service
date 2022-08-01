import mongoose, { Schema } from 'mongoose';

export interface TokenInterface {
  address?: string;
  chainId?: number;
  name?: string;
  decimal?: number;
  symbol: string;
}

const tokenSchema = new Schema(
  {
    address: { type: String, require: true, unique: true },
    chainId: { type: Number, require: true },
    name: { type: String },
    decimal: {
      type: Number,
      min: [0, 'Decimal must greater or equal to 0'],
      require: true,
    },
    symbol: { type: String, require: true },
  },
  { timestamps: true }
);

tokenSchema.index(
  {
    address: 1,
    chainId: 1,
  },
  { unique: true }
);

const Token = mongoose.model('Token', tokenSchema);

Token.on('index', (error) => {
  if (error) {
    console.log('Token indexing error', error);
  }
});

export default Token;
