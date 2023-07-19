import { Post, RedditAPIClient, SettingsClient } from "@devvit/public-api"
import { coolAppCodeThatIsInProd, gimmePostBody } from "./event.js"

test('how can i test Devvit-specific types', async () => {
  const client = {
    async get<T>(name: string): Promise<T | undefined> {
      if (name === 'my-app-stuff-and-things') return true as T
      return false as T
    }
  } as SettingsClient

  const mutableThing = {foo: false}
  await coolAppCodeThatIsInProd(client, mutableThing)

  expect(mutableThing).toEqual({foo: true})
  // OR
  expect(mutableThing.foo).toEqual(true)
})

test.each([
  ['reddit api is good', true],
  ['reddit api had some failure', false],
])('gimmePostBody() %s', async (_, redditSucceeds) => {
  const client = {
    async getPostById(id: string): Promise<Post> {
      if (redditSucceeds) return {body: 'abc'} as Post
      throw Error('something bad')
    }
  } as RedditAPIClient

  if (redditSucceeds)
  await expect(gimmePostBody(client, '123')).resolves.toEqual('abc')
  else 
  await expect(() => gimmePostBody(client, '123')).rejects.toThrow()
})
