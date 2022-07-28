module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f1de8315588e4bc26fb08ab3cd8c8273'),
  },
});
