import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dating App API",
      version: "1.0.0",
    },

    servers: [
      {
        url: "http://localhost:5000",
      },
    ],

    tags: [
      { name: "Admin", description: "Admin APIs" },
      { name: "Auth", description: "Authentication APIs" },
      { name: "User", description: "User APIs" },
      { name: "Media", description: "Photo & KYC APIs" },
      { name: "Block", description: "Block system APIs" },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: ["./src/routes/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;