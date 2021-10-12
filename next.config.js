module.exports = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/posts/:crypto',
        headers: [
          {
            key: 'index',
            value: ':crypto', // Matched parameters can be used in the value
          },

        ],
      },
    ]

  }
};

