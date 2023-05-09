/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
   
    NEXT_PUBLIC_SANITY_DATASET: 'production', 
    NEXT_PUBLIC_SANITY_PROJECT_ID: 'pffpqksx',
    NEXT_PUBLIC_BASE_URL:'https://bhola.sanity.studio/',

  },
}

module.exports = nextConfig
