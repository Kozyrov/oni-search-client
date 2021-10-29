import React from "react"

const Results = (props) => {
  const {searchResults} = props;

  const resultsList = searchResults.map((item) => {
    return (
      <li>
        <div>
          {item.attributes.canonicalTitle}
          <img src={item.attributes.posterImage.tiny} alt=""></img>
        </div>
      </li>
    )
  })

  return (
    <div>
      search results placeholder
      {resultsList}
    </div>
  )
}

export default Results; 