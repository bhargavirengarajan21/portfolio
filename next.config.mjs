// next.config.mjs
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        config.optimization.runtimeChunk = true;
        config.optimization.splitChunks = {
          chunks: 'all',
        };
      }
  
      return config;
    },
  };
  
  export default nextConfig;
  