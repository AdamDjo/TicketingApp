'use client';
import { TicketType } from '@/types/ticket.type';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface TicketProps {
  ticket: {
    _id?: string;
    title: string;
    description: string;
    priority: number;
    progress: number;
    status: string;
    category: string;
  };
}
const TicketForm: React.FC<TicketProps> = ({ ticket }) => {
  const EDITMODE = ticket._id === 'new' ? false : true;
  const router = useRouter();
  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'not started',
    category: 'UI/UX',
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData(
      (prev) =>
        ({
          ...prev,
          [name]: name === 'priority' ? Number(value) : value,
        } as TicketType)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: 'PUT',
        body: JSON.stringify({ formData }),
        headers: { 'content-type': 'application/json' },
      });
      if (!res.ok) {
        throw new Error('Failed to create ticket.');
      }
    } else {
      const res = await fetch('/api/Tickets', {
        method: 'POST',
        body: JSON.stringify({ formData }),
        headers: { 'content-type': 'application/json' },
      });
      if (!res.ok) {
        throw new Error('Failed to create ticket.');
      }
    }
    router.push('/TicketPage');
    router.refresh();
  };

  if (EDITMODE) {
    startingTicketData['title'] = ticket.title;
    startingTicketData['description'] = ticket.description;
    startingTicketData['priority'] = ticket.priority;
    startingTicketData['progress'] = ticket.progress;
    startingTicketData['status'] = ticket.status;
    startingTicketData['category'] = ticket.category;
  }
  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? 'Update Your Ticket' : 'Create Your Ticket'}</h3>
        <label> Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        ></input>

        <label> Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        ></textarea>

        <label> Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="UI/UX"> UI/UX</option>
          <option value="FrontEnd"> FrontEnd</option>
          <option value="BackEnd"> BackEnd</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          ></input>
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          ></input>
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          ></input>
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          ></input>
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          ></input>
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        ></input>

        <label>Status</label>
        <select name="status" onChange={handleChange}>
          <option value="Not started"> Not started</option>
          <option value="Started"> Started</option>
          <option value="Done"> Done</option>
        </select>
        <input
          type="submit"
          className="btn max-w-xs"
          value={EDITMODE ? 'Update Your Ticket' : 'Create Your Ticket'}
        ></input>
      </form>
    </div>
  );
};

export default TicketForm;
