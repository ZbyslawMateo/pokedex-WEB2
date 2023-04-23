import React from 'react'
import '../styles/components.css'

export default function pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="pagination">
      {gotoPrevPage && <button className="pagination-btn" onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button className="pagination-btn" onClick={gotoNextPage}>Next</button>}
    </div>
  )
}