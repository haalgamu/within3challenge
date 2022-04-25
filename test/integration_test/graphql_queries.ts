export const graphQLPostalCodeQueryData = {
  query: `
    query postalCode($postalCode: String!, $countryCode: String!){
        getPostalCodeInfo(
            parameters: {
                postalCode: $postalCode,
                countryCode: $countryCode
            }
        ){
            postalCode
            country
        }
    }
    `,
  variables: {
    postalCode: '90211',
    countryCode: 'us',
  },
  mock: {getPostalCodeInfo: { country: 'United States', postalCode: '90211' }},
}
