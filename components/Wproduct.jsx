import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Wproduct = ({ wproduct: { image, name, slug, price }}) => {
  return (
    <div>
      <Link href={`/wproduct/${slug.current}`}>
          <div className="product-card">
            <img
              src={urlFor(image && image[1])}
              width={250}
              height={250}
              className="product-image"
            />
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
          </div>
        </Link>
    </div>
  )
}

export default Wproduct