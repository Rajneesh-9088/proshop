import React from 'react'
import { Helmet } from "react-helmet";

const Meta = ({title,description,kewords}) => {
    return (
        <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="keyword"
          content={kewords}
        />
      </Helmet>
    )
}

Meta.defaultProps = {
     title: 'Welcome to ProShop',
     description: "We sell the best products for cheap",
     keywords: "electronics, buy electronics, cheap electronics",

}

export default Meta
