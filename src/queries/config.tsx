export const LatestProducts = /* GraphQL */ `
  query LatestProducts {
    products(first: 12, channel: "default-channel") {
      edges {
        node {
          id
          name
          thumbnail {
            url
          }
          category {
            name
          }
        }
      }
    }
  }
`;

export const GetShopName = /* GraphQL */ `
  query GetShopName {
    shop {
      name
    }
  }
`;

export const GetProductByID = /* GraphQL */ `
  query ProductByID($id: ID!) {
    product(id: $id, channel: "default-channel") {
      id
      name
      description
      media {
        url
      }
      category {
        name
      }
    }
  }
`;
export const GetCartData = /* GraphQL */ `
  query CheckoutFetchByToken($checkoutToken: UUID!) {
    checkout(token: $checkoutToken) {
      id
      email
      lines {
        id
        totalPrice {
          gross {
            amount
            currency
          }
        }
        variant {
          product {
            id
            name
            slug
            thumbnail {
              url
              alt
            }
          }
          pricing {
            price {
              gross {
                amount
                currency
              }
            }
          }
          name
        }
      }
      totalPrice {
        gross {
          amount
          currency
        }
      }
    }
  }
`;
