import { faPlus, faTicket } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-10">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon"></FontAwesomeIcon>
        </Link>
        <Link href="/TicketPage">
          <FontAwesomeIcon icon={faTicket} className="icon"></FontAwesomeIcon>
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </Link>
      </div>
      <div className="text-default-text flex items-center space-x-10">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <p className="">email@mail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
