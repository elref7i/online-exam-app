import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/constants/api.constants";
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
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
          method: "POST",
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

        if ("code" in payload) {
          throw new Error(payload.message);
        }
        return {
          id: payload.user._id,
          token: payload.token,
          user: payload.user,
        };
      },
    }),
  ],
  callbacks: {
    // Cookie لما تنحج عملية تسجيل الدخول بياخد البيانات يشفرها ويحفظها فى
    //token => اللى بحط فيها الداتا فى الكوكى واحتجها بعدين
    //user => الداتا اللى راجعه من الباك
    //profile => معلوماتك فى جوجل او اى حاجه مسجل بيها Oauth
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token.user = user.user;
      }
      return token;
    },
    session: ({ session, token }) => {
      // token => لما يتفك التشفير
      session.user = token.user;

      return session;
    },

    //jwt=> بتاخد الداتا وتشفرها من return من authorize
    //session => بتجيب الداتا بعد ما يتفك تشفيرها
    //redirect => اوجهو لى صفحه معينه
    //callbackurl => بتوفرها عشان مثلا لو دخلت على صفحه وكنت لازم تسجل وبعدين تروح تسجل وبعدين يرجعك على الصفحه اللى مكنتش عارف تدخلها
    // signin => اثناء
  },

  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true, // لازم تكون true علشان Vercel HTTPS
      },
    },
  },
};
