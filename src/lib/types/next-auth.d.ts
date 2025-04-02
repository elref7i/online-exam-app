/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { ApllicationUser } from './auth';

declare module 'next-auth' {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    token: string;
    user: ApllicationUser;
  }

  /** The OAuth profile returned from your provider */
  interface Profile {
    email: string;
    email_verified: boolean;
    name: string;
    picture: string;
    given_name: string;
    family_name: string;
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User['user'];
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface JWT extends User {}
}
