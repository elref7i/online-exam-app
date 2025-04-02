import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { JSON_HEADER } from './lib/constants/api.constants';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: './auth/login',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        //return null => بدون علم السبب
        // return {id:'2'} => العمليه نجحت
        // ولما ترجع داتا من الباك  سواء غلط او صح nextAuth بتتعامل انو نجح تسجييل دخول
        // thow new error => بعلم السبب
        const response = await fetch(`${process.env.API!}/auth/signin`, {
          method: 'POST',
          //هيضرب Error  =>   بيتبعت معاها CSRF token و callbackurl , redirect والباك مش عايزهم اصلا credentials لانى
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            ...JSON_HEADER,
          },
        });
        const payload: APIResponse<LoginResponse> = await response.json();

        console.log(payload);
        if ('code' in payload) {
          throw new Error(payload.message);
        }
        return {
          id: payload.user._id,
          token: payload.token,
          user: payload.user,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    jwt: ({ token, user, profile }) => {
      console.log(profile);
      if (profile) {
        token.user = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email || '',
          username: '',
          _id: '',
          isVerified: profile.email_verified,
          phone: '',
          role: '',
        };
      } else if (user) {
        token.token = user.token;
        token.user = user.user;
      }
      return token;
    },
    session: ({ session, token }) => {
      //* token => لما يتفك التشفير
      session.user = token.user;

      return session;
    },

    //jwt=> بتاخد الداتا وتشفرها من return من authorize
    //session => بتجيب الداتا بعد ما يتفك تشفيرها
    //redirect => اوجهو لى صفحه معينه
    //callbackurl => بتوفرها عشان مثلا لو دخلت على صفحه وكنت لازم تسجل وبعدين تروح تسجل وبعدين يرجعك على الصفحه اللى مكنتش عارف تدخلها
    // signin => اثناء
  },
};
