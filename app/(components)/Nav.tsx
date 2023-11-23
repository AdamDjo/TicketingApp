'use client';
import { faPlus, faTicket } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  const { data: session }: any = useSession();
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-10">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon"></FontAwesomeIcon>
        </Link>

        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </Link>
        <Link href="/TicketPage">
          <FontAwesomeIcon icon={faTicket} className="icon"></FontAwesomeIcon>
        </Link>
      </div>
      <div className="text-default-text flex items-center space-x-10">
        {!session ? (
          <>
            {' '}
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        ) : (
          <>
            {session.user?.email}

            <button
              className="mx-5 btn"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
