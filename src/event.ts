import { RedditAPIClient, SettingsClient } from "@devvit/public-api";

export async function coolAppCodeThatIsInProd(
  client: SettingsClient,
  mutableThing: {foo: boolean}): Promise<void> {
    mutableThing.foo = (await client.get('my-app-stuff-and-things')) === true
}


export async function gimmePostBody(client: RedditAPIClient, postID: string): Promise<string | undefined> {
  const post = await client.getPostById(postID)
  return post.body
}
