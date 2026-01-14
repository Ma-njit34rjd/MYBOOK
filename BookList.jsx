import React from 'react';

export default function BookList({ books, onDelete, onEdit, onStatusChange }) {
  return (
    <div className="row">
      {books.map(book => (
        <div key={book.id} className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
              <p className="card-text">{book.genre} ({book.year})</p>
              <p className="card-text">{book.description}</p>
              <select
                value={book.status}
                onChange={e => onStatusChange(book.id, e.target.value)}
                className="form-select mb-2"
              >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Finished</option>
              </select>
              <button className="btn btn-outline-primary me-2" onClick={() => onEdit(book)}>Edit</button>
              <button className="btn btn-danger" onClick={() => onDelete(book.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

