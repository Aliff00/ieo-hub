import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Ecosystem Partner",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        const email = credentials.email.toLowerCase();
        let role = "PARTNER";
        let name = "Dr. Alex Danvers";
        let id = "usr_partner_1";

        if (email.includes("innovator")) {
          role = "INNOVATOR";
          name = "Dr. Jordan Hayes";
          id = "usr_innovator_1";
        } else if (email.includes("admin")) {
          role = "ADMIN";
          name = "Sarah Lin";
          id = "usr_admin_1";
        }

        return {
          id,
          name,
          email: credentials.email,
          role,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-development-mode-only",
};
