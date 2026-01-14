import React from 'react';

export default function SearchFilter({ search, setSearch, filter, setFilter }) {
  return (
    <div className="row mb-4">
      <div className="col-md-8 mb-2">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by title or author"
          className="form-control"
        />
      </div>
      <div className="col-md-4">
        <select value={filter} onChange={e => setFilter(e.target.value)} className="form-select">
          <option value="All">All</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Finished">Finished</option>
        </select>
      </div>
    </div>
  );
}
