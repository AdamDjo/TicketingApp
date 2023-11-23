import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect, useRouter } from 'next/navigation';

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession();

  return (
    <div>
      {!session ? (
        <div className="flex min-h-screen flex-col items-center justify-between p-24  ">
          <p className="bg-red-600">
            {' '}
            You need to login to see this content please create an account & try
            to loggin !!!!!
          </p>
        </div>
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <p className="bg-green-600">
            {' '}
            Congratulation you are logged in you can now see the content of this
            page !!!!!
          </p>
        </div>
      )}
    </div>
  );
};

export default page;
