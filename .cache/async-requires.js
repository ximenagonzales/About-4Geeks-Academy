// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-online-cv-index-js": () => import("./../src/templates/online-cv/index.js" /* webpackChunkName: "component---src-templates-online-cv-index-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-pdf-js": () => import("./../src/pages/PDF.js" /* webpackChunkName: "component---src-pages-pdf-js" */),
  "component---src-pages-profile-js": () => import("./../src/pages/profile.js" /* webpackChunkName: "component---src-pages-profile-js" */),
  "component---src-pages-profile-2-js": () => import("./../src/pages/profile2.js" /* webpackChunkName: "component---src-pages-profile-2-js" */),
  "component---src-pages-students-js": () => import("./../src/pages/students.js" /* webpackChunkName: "component---src-pages-students-js" */),
  "component---src-pages-yaml-to-json-js": () => import("./../src/pages/YamlToJson.js" /* webpackChunkName: "component---src-pages-yaml-to-json-js" */)
}

