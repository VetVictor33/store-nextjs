export const PRODUCTS_QUERY = `query ProductByCategory {
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
    category {
      name
      id
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
      category {
        name
        id
      }
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
export const HIGTLIGHT_QUERY = `query Highlight {
  allHighlights {
    url
    title
    id
    image {
      responsiveImage(fallbackLocales: en, locale: en, sizes: "") {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        srcSet
        src
        webpSrcSet
        width
        title
      }
    }
  }
}`
export const BANNER_QUERY = `query Banner {
  allBanners {
    id
    title
    url
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