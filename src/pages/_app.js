import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getSession, signOut } from 'next-auth/react';
import Layout from '../components/layouts/DefaultLayout';
import AuthContext from '../components/AuthContext';
import '../assets/css/global.css';

import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';

// create http link to your graphql endpoint
const httpLink = new HttpLink({
  uri:
    process.env.NEXT_PUBLIC_DEV_GRAPHQL_ENDPOINT ||
    'https://dev-born-api-ubx6j6ehna-nw.a.run.app/api/graphql',
});

// create error link to handle errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError?.statusCode === 401) {
    signOut({ redirect: false }); // sign out the user when the token is expired!
    location.pathname !== '/' && location?.replace('/');
  }

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// create auth link to set authorization header
const authLink = setContext(async (_, { headers }) => {
  const session = await getSession();
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${session?.token}`,
    },
  };
});

// create apollo client instance
export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(Number(process.env.NEXT_HOTJAR_ID), 6);
  }, []);

  return (
    <AuthContext>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </AuthContext>
  );
}
