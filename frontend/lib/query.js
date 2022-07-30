export const PRODUCT_QUERY = `
query{
    products{
      data{
        attributes{
          Title
          Description
          Price
          Slug
          Image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_QUERY = `
query getProducts($Slug:String!){
  products(filters: {Slug: {eq: $Slug}}){
    data{
      attributes{
        Title
        Description
        Price
        Slug
        Image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}`;
