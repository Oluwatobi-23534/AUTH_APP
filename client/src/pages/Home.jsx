/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-700">
        Welcome to my Authentication App!
      </h1>
      <p className="mb-4 text-slate-700">
        This application is built using the MERN stack, which is a powerful
        combination of MongoDB, Express.js, React.js, and Node.js. It provides a
        secure and efficient way to manage user authentication. Sign up to
        explore more!
      </p>
      <p className="mb-4 text-slate-700">
        Our application uses MongoDB, a source-available cross-platform
        document-oriented database program, for storing user data. It's
        classified as a NoSQL database program which uses JSON-like documents
        with optional schemas. This provides flexibility and scalability, making
        it perfect for an authentication system.
      </p>

      <p className="mb-4 text-slate-700">
      The frontend of the application is built with React.js, a JavaScript library for building user interfaces, particularly single page applications. Express.js and Node.js handle the backend operations, providing a robust and efficient environment for server-side operations. We've implemented JSON Web Tokens (JWT) for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWT is used for authentication and secure data exchange. Together, these technologies ensure a seamless and secure user experience.
      </p>
    </div>
  );
}
