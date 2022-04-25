import request from 'supertest'
import { Server } from 'express'
import { createServer } from '../../src/server'
import { graphQLPostalCodeQueryData } from './graphql_queries'

describe('e2e', () => {
  let app: Server

  beforeAll(async () => {
    app = await createServer()
  })

  test('Query:getPostalCodeInfo', async () => {
    const response: any = await request(app)
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(graphQLPostalCodeQueryData)
      
    expect(response.errors).toBeUndefined()
    expect(response.body.data).toStrictEqual(graphQLPostalCodeQueryData.mock)
  })
})
