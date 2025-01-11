import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Включает строгий режим React
  webpack: (config, { isServer }) => {
    // Настройка для CSS-модулей
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: isServer
                ? "[hash:base64:8]"
                : "[path][name]__[local]", // Формат имен классов
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;