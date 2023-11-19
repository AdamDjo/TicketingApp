'use client';
import { TicketType } from '@/types/ticket.type';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = () => {
  const startingTicketData: TicketType = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'not started',
    category: 'Hardware problem',
    createdAt: new Date(),
  };

  const router = useRouter();
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'priority' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/Tickets', {
      method: 'POST',
      body: JSON.stringify({ formData }),
      headers: { 'content-type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error('Failed to create ticket.');
    }

    router.push('/');
    router.refresh();
  };
  const [formData, setFormData] = useState<TicketType>(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
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
          <option value="hardware"> harwareProblem</option>
          <option value="hardware"> harwareProblem</option>
          <option value="hardware"> harwareProblem</option>
          <option value="hardware"> harwareProblem</option>
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
          <label>4</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 4}
          ></input>
          <label>5</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          ></input>
          <label>3</label>
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
          value={'create ticket'}
        ></input>
      </form>
    </div>
  );
};

export default TicketForm;
