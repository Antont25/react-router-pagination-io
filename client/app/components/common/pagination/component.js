import React, { useEffect } from 'react'

import ReactRouterPagination from 'react-router-pagination'

const Pagination = ({
  totalPages,
  pageNumber,
  spread,
  handleClick
}) => {
  useEffect(() => {
    handleClick(1)
  }, [])

  return <ReactRouterPagination
    totalPages={totalPages}
    pageNumber={pageNumber}
    spread={spread}
    onClick={handleClick}
  />
}

Pagination.propTypes = {
  ...ReactRouterPagination.propTypes
}

Pagination.defaultProps = {
  ...ReactRouterPagination.defaultProps
}

export default Pagination
