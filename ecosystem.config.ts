export default {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "run start",
      watch: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    production: {
      user: "ecs-user",
      host: "8.219.236.247",
      ref: "origin/master",
      repo: "git@github.com:Khoinguyen002/Strapi.git",
      path: "/var/www/strapi",
      "pre-deploy": "git fetch --all",
      "post-deploy":
        "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      env: {
        NODE_ENV: "production",
      },
    },
  },
};
