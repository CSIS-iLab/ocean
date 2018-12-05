import algoliasearch from 'algoliasearch'

import instantsearch from 'instantsearch.js/es'

import {
  searchBox,
  hits,
  stats,
  pagination,
  menuSelect,
  clearAll,
  sortBySelector
} from 'instantsearch.js/es/widgets'

let location = window.location.pathname.split('/').filter(f => f)

const titleText = document.querySelector('.archive__title')

const dataset = document.querySelector('.archive').dataset

const elementsToHideNoResults = document.querySelectorAll(
  '.algolia--hide-no-results'
)
const client = algoliasearch('7UNKAH6RMH', 'b9011cf7f49e60630161fcacf0e37d02')

const indexName = dataset.collectionTitle === 'authors' ? 'ocean' : 'ocean_desc'

const searchParameters = {
  hitsPerPage: 1
}

if (!['all', 'authors'].includes(dataset.collectionTitle)) {
  searchParameters.filters = `content_type:'${dataset.collectionTitle}'`
}

if (dataset.collectionTitle === 'authors') {
  console.log(dataset.collectionTitle)
  searchParameters.facetFilters = [`authors: ${location[1]}`]
}

const routing = {
  stateMapping: {
    stateToRoute(uiState) {
      let state = {
        query: uiState.query,
        page: uiState.page
      }
      let keys = mapStateToKeys(uiState)

      let route = Object.assign(keys, state)

      return route
    },
    routeToState(routeState) {
      let route = {
        query: routeState.query,
        page: routeState.page
      }
      let refinementList = mapRouteToKeys(routeState)
      let state = Object.assign(refinementList, route)

      return state
    }
  }
}

const search = instantsearch({
  indexName: indexName,
  searchClient: client,
  searchParameters,
  routing
})

const AlgoliaSearch = () => {
  if (dataset.collectionTitle === 'all') {
    addSearchBox()
    addSortWidget()
    addFilterWidgets()
  }

  if (dataset.collectionTitle !== 'authors') {
    addPagination()
    addResultSummary()
  }

  addResults()

  search.on('render', render)
  search.start()
}

const updateSearchTitle = () => {
  const queryText = document.querySelector('.archive__search-input')

  if (!search.helper.state.query) {
    queryText.value = ''
    return
  }
  queryText.value = search.helper.state.query

  titleText.innerHTML = `Search for ${search.helper.state.query}`
}

const updateTaglineTitle = () => {
  titleText.innerHTML = `ARTICLES WITH TAG: ${
    search.helper.state.hierarchicalFacetsRefinements.keywords
  }`
}
const updateBylineTitle = () => {}

const toggleElementsOnNoResults = (elements, action) => {
  elements.forEach(el => el.classList[action]('algolia--is-hidden'))
}

const mapRouteToKeys = routeState => {
  let author

  if (location[0] === 'authors') {
    author = { name: location[1] }
  }

  let menu = {}
  Object.keys(routeState).forEach(k => {
    menu[k] = routeState[k]
  })

  return author ? { menu, author } : { menu }
}

const mapStateToKeys = uiState => {
  let keyArray = ['keywords', 'content_type']
    .map(param => {
      if (uiState.menu) {
        return { [param]: uiState.menu[param] }
      }
    })
    .filter(k => k)

  let keys = {}

  if (keyArray.length)
    keyArray.forEach(k => {
      let key = Object.keys(k)[0]
      keys[key] = k[key]
    })

  return keys
}

const addResults = () => {
  search.addWidget(
    hits({
      container: '.archive__listing',
      templates: {
        item: hit => {
          return `${hit.html}`
        },
        empty: `${
          dataset.collectionTitle !== 'authors'
            ? `<h2 class="section-title">Nothing Found</h2>
          <p>Sorry, but nothing matched your search terms. Please try again with different keywords.</p>
          <a href="." class="btn">Clear All Filters</a>`
            : ``
        }`
      }
    })
  )
}

const addPagination = () => {
  search.addWidget(
    pagination({
      container: '.pagination',
      showFirstLast: false,
      labels: {
        previous: '<i class="icon-arrow-chevron_left"></i>',
        next: '<i class="icon-arrow-chevron_right"></i>'
      }
    })
  )
}

const addSortWidget = () => {
  search.addWidget(
    sortBySelector({
      container: '.archive__filters-sort',
      autoHideContainer: true,
      templates: {
        header: 'Sort by'
      },
      indices: [
        { name: 'ocean_desc', label: 'Newest' },
        { name: 'ocean_asc', label: 'Oldest' }
      ]
    })
  )
}

const addResultSummary = () => {
  search.addWidget(
    stats({
      container: '.archive__result-summary',
      templates: {
        body: data => {
          let results_text = 'Items'
          let page = data.page + 1

          if (data.hasOneResult) {
            results_text = 'Item'
          }
          return `
            <span class="summary-text">${
              data.nbHits
            }</span> <span class="summary-label">${results_text}</span> |
            <span class="summary-label">Page</span> <span class="summary-text">${page} of ${
            data.nbPages
          }</span>

          `
        },
        autoHideContainer: true
      }
    })
  )
}

const addSearchBox = () => {
  search.addWidget(
    searchBox({
      container: '.archive__search-input',
      queryHook: function(query, search) {
        search(query)
      },
      magnifier: false,
      reset: true
    })
  )
}

const addFilterWidgets = () => {
  search.addWidget(
    menuSelect({
      container: '.archive__filters-content_type',
      attributeName: 'content_type',
      templates: {
        header: 'Filter by',
        item: data => `${data.label}`,
        seeAllOption: 'All'
      }
    })
  )
  search.addWidget(
    menuSelect({
      container: '.archive__filters-keywords',
      attributeName: 'keywords',
      templates: {
        header: 'Tag',
        item: data => `${data.label}`,
        seeAllOption: 'None'
      }
    })
  )
  search.addWidget(
    clearAll({
      container: '.archive__filters-clear_all',
      templates: {
        link: 'Reset'
      },
      clearsQuery: true
    })
  )
}

const calcSelectWidth = select => {
  let hiddenInputContainer = document.querySelector('.selectCalc')

  let selectedIndex = select.selectedIndex

  let option = select.options[selectedIndex].outerHTML

  hiddenInputContainer.innerHTML = `<select>${option}</select>`

  let hiddenInput = hiddenInputContainer.querySelector('select')

  hiddenInput.style.display = 'block'

  hiddenInput.style.webkitAppearance = 'none'

  let width = hiddenInput.offsetWidth

  select.style.width = `${width + 15}px`

  hiddenInput.style.display = 'none'
}

const render = () => {
  let parent = document.querySelector('.ais-pagination')
  if (parent) {
    let prev = document.querySelector('.ais-pagination--item__previous')
    let next = document.querySelector('.ais-pagination--item__next')
    parent.insertBefore(prev, next)
  }

  let selects = [...document.querySelectorAll('.archive__filters select')]

  selects.forEach(select => {
    calcSelectWidth(select)
    select.addEventListener('change', calcSelectWidth(select))
  })

  if (search.helper.state.query) {
    updateSearchTitle()
  }

  if (location[0] === 'authors') {
    updateBylineTitle()
  }

  if (search.helper.state.hierarchicalFacetsRefinements.keywords) {
    updateTaglineTitle()
  }

  if (search.helper.lastResults.nbHits == 0) {
    toggleElementsOnNoResults(elementsToHideNoResults, 'add')
  } else {
    toggleElementsOnNoResults(elementsToHideNoResults, 'remove')
  }

  if (search.helper.lastResults.nbHits < 2) {
    toggleElementsOnNoResults(
      document.querySelectorAll('.archive__result-summary'),
      'add'
    )
  }
}
export default AlgoliaSearch
