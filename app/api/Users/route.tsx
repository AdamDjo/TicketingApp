import { NextResponse } from 'next/server';
import { UserType } from '../../../types/user.types';
import UserModel from '@/app/(models)/User';
import bcrypt from 'bcrypt';
import connectDB from '@/utils/db';

//Create user
export async function POST(req: any) {
  try {
    await connectDB(); // Connect to MongoDB

    const body = await req.json();
    const userData = body;

    //Confirm data exists
    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    //check for duplicate emails
    const duplicate = await UserModel.findOne({ email: userData.email })
      .lean()
      .exec();
    if (duplicate) {
      return NextResponse.json({ message: 'Duplicate Email' }, { status: 409 });
    }
    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;
    await UserModel.create(userData);
    return NextResponse.json({ message: 'User Created' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
