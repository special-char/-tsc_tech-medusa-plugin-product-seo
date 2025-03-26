<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  Medusa Plugin Starter
</h1>


<p align="center">
  Building blocks for digital commerce
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
</p>

## Compatibility

This starter is compatible with versions >= 2.4.0 of `@medusajs/medusa`. 


https://github.com/user-attachments/assets/96007ce9-f9f4-44ec-aa2f-5fe355eb0ae4


## Features

Add SEO metadata (title, description, keywords) to products and product categories.

Improve search engine visibility for your Medusa store.

Easily manage SEO attributes directly from the admin panel.

Compatible with Medusa v2.4.0 and above.


## Installation

To install the Medusa SEO plugin, follow these steps:

Step:1 Install the plugin using npm or yarn:

```
npm install @tsc_tech/medusa-plugin-product-seo
```

OR

```
yarn add @tsc_tech/medusa-plugin-product-seo
```

Step:2 Add the plugin to your medusa-config.js:

```

module.exports = defineConfig({
  plugins: [
    {
      resolve: "@tsc_tech/medusa-plugin-product-seo",
      options: {},
    },
    ],
})
```

Step:3 Run migrations:

```
npx medusa db:migrate
```

Step:4 Restart your Medusa server:

```
npm run dev
```
OR
```
yarn dev
```

Step:4 Integrate with your storefront

After successfully integrating the plugin with your storefront, you can take full control of your store's SEO directly from the Medusa admin panel.

## Managing SEO from Medusa Admin
1. **Navigate to Products or Product Categories**  
   - Go to the Medusa admin dashboard.  
   - Select a product or category that you want to optimize for search engines.

2. **Update SEO Metadata**  
   - Fill in relevant SEO fields such as **title, description, and keywords**.  
   - Ensure the metadata aligns with best SEO practices to improve search rankings.

3. **Save Changes & Monitor Performance**  
   - Once updated, save the changes.  
   - Over time, track improvements in search visibility and adjust metadata as needed.

By leveraging this plugin, you enhance the discoverability of your Medusa store, making it easier for potential customers to find your products through search engines.


## Usage
Once installed, you can manage SEO metadata from the Medusa admin panel. Navigate to a product or category and update its SEO attributes.


## Community & Contributions
The community and core team are available in GitHub Discussions, where you can ask for support, discuss the roadmap, and share ideas.
