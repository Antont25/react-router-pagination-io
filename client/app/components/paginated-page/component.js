import React from 'react'
import PropTypes, { string } from 'prop-types'

import {
  Link
} from 'react-router-dom'

import Pagination from 'react-router-pagination-io/client/app/components/common/pagination'

const PaginatedPage = ({
  pageNumber,
  data
}) => (
  <section>
    <h1>Pagination (Page {pageNumber})</h1>
    <Pagination/>
    <nav>
      <p>Return to the <Link to="/">index page</Link>.</p>
      {do {
        if (pageNumber) {
          <p>Redux has state for page {pageNumber}.</p>
        }
      }}
      {data?.length > 0
        && data.map(el => {
          return <div key={el.id}>
            <h3>{el.first_name}</h3>
            <h3>{el.last_name}</h3>
            <div><img src={el.avatar} alt="avatar"/></div>
          </div>
        })
      }
    </nav>
  </section>
)

PaginatedPage.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    first_name: PropTypes.string,
    id: PropTypes.string,
    s: PropTypes.string.isRequired,
    last_name: PropTypes.string
  }))
}
export default PaginatedPage
