import React, { useEffect, useState } from 'react';

export default function BookForm({ onSubmit, editBook }) {
  const [form, setForm] = useState({
    title: '', author: '', genre: '', year: '', description: '', status: 'Not Started'
  });

  useEffect(() => {
    if (editBook) setForm(editBook);
  }, [editBook]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.author) return;
    onSubmit(form);
    setForm({ title: '', author: '', genre: '', year: '', description: '', status: 'Not Started' });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">
      <h4>{editBook ? 'Edit Book' : 'Add Book'}</h4>
      <div className="row g-2">
        <div className="col-md-6">
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="form-control" />
        </div>
        <div className="col-md-6">
          <input name="author" value={form.author} onChange={handleChange} placeholder="Author" className="form-control" />
        </div>
        <div className="col-md-4">
          <input name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" className="form-control" />
        </div>
        <div className="col-md-4">
          <input name="year" value={form.year} onChange={handleChange} placeholder="Year" className="form-control" />
        </div>
        <div className="col-md-4">
          <select name="status" value={form.status} onChange={handleChange} className="form-select">
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Finished</option>
          </select>
        </div>
        <div className="col-12">
          <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="form-control" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">{editBook ? 'Update Book' : 'Add Book'}</button>
    </form>
  );
}
