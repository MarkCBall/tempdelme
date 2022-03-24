
export const tokenSyncUri = String(
  process.env.REACT_APP_TOKEN_SYNC_URI ||
    'https://testvelox-pj4px6fmua-uc.a.run.app/v1/graphql'
).replace('ws', 'http');

export const romeTokenSyncUri = String(
  process.env.REACT_APP_HASURA_API_ENDPOINT_WS ||
    'https://romenet.prod.velox.global/v1/graphql'
).replace('ws', 'http');
