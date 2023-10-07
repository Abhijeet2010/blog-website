import connect from "@/db/dbConnection";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
import User from "@/models/userSchema";
import bcrypt from "bcrypt";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Google_CLIENT_ID,
      clientSecret: process.env.Google_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();
        try {
          const userExist = await User.findOne({ email: credentials.email });
          if (userExist) {
            const passwordMatch = await bcrypt.compare(
              credentials.password,
              userExist.password
            );

            if (passwordMatch) {
              return userExist;
            }
            if (!passwordMatch) {
              throw new Error("Wrong Credentials");
            }
          }
          if (!userExist) {
            throw new Error("User Not Found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    // ...add more providers here
  ],
  pages: {
    error: "/dashboard/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
