export const PRODUCTS_QUERY = `query Sales {
  
  allProducts {
    id
    name
    price
    image {
      responsiveImage(fallbackLocales: en, locale: en, sizes: "") {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    description {
      blocks
      links
      value
    }
  }

}`
export const SALES_QUERY = `query Sales {
  allSales {
    id
    productOnSale {
      id
      image {
        responsiveImage(fallbackLocales: en, locale: en, sizes: "") {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
          title
        }
      }
      name
      price
      category
    }
    sale
  }
}`
export const CATEGORIES_QUERY = `query Categories {
  allCategories {
    id
    name
    image {
      responsiveImage(fallbackLocales: en, locale: en, sizes: "") {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
  }
}`