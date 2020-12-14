import fetch from 'node-fetch'
import { v4 as uuidv4 } from 'uuid';
import { authenticate } from '@src/auth'

describe('Auth', () => {
  it('If loginStatus === SUCCESS it returns a session token', async () => {
    expect.hasAssertions();
    //Setup
    const token = uuidv4();

    // @ts-ignore
    fetch.mockResponse(JSON.stringify({
      sessionToken: token,
      loginStatus: 'SUCCESS'
    }));

    const sessionToken = await authenticate()

    expect(sessionToken).toStrictEqual(token)
  })
})