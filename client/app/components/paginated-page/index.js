import {
  connect
} from 'react-redux'

import Pagination from 'react-router-pagination'

import Component from './component'

export default connect((store) => ({
  pageNumber: Pagination.calculatePageNumber(store.paginatedPage.data?.page, store.paginatedPage.data?.total),
  data: store.paginatedPage.data?.data
}))(Component)
