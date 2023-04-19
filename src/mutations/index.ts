export const getUserToken = /* GraphQL */ `
  mutation {
    tokenCreate(email: "admin-saleor@startappz.com", password: "Push2limit") {
      token
      refreshToken
      errors {
        field
        message
      }
    }
  }
`;
