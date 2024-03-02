/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
    
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
    
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'docs',

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true }}],
        })
        return config;
    },

};

export default nextConfig;
