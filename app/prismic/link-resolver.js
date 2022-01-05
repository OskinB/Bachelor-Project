// The Link Resolver takes a Prismic document as its argument
export default function (doc) {
  // Then it executes a switch to determine how to treat the item
  if (doc.type === 'home') {
    return '/'
  }
  if (doc.type === 'products') {
    return '/products/' + doc.uid
  }
  if (doc.type === 'product_info') {
    return '/product_info/' + doc.uid
  }
  if (doc.type === 'page') {
    return '/page/' + doc.uid
  }
  return '/page-not-found'
}
