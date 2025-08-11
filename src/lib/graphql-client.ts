const API_URL = 'https://8840-54-37-203-255.ngrok-free.app/shop-api';

export async function fetchGraphQL<T = any>(
  query: string,
  variables: Record<string, any> = {}
): Promise<{ data: T }> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }

  const result = await response.json();
  
  if (result.errors) {
    throw new Error(`GraphQL error: ${JSON.stringify(result.errors)}`);
  }
  console.log("result",result)

  return result;
}
