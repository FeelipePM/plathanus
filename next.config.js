/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR',
    domains: [
      {
        domain: 'plathanus.com.br',
        defaultLocale: 'pt-BR',
        http: true
      },
      {
        domain: 'plathanus.com.br/en-US',
        defaultLocale: 'en-US'
      }
    ]
  }
}

module.exports = nextConfig
