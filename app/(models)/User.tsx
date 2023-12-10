import mongoose, { Schema, Model } from 'mongoose';
import connectDB from '../../utils/db';
import { UserType } from '@/types/user.types';

const userSchema = new Schema<UserType>(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
    _id: true,
  }
);

let UserModel: Model<UserType>;

try {
  UserModel = mongoose.model<UserType>('User');
} catch {
  UserModel = mongoose.model<UserType>('User', userSchema);
}

export default UserModel;
