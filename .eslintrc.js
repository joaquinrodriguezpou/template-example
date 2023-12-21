module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'off', // Puedes personalizar estas reglas según tus preferencias
    },
  };
  