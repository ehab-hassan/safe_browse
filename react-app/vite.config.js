import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    // Serve logo from project root: savebrowe_file/images at /images
    {
      name: 'serve-parent-images',
      configureServer(server) {
        const imagesDir = path.resolve(server.config.root, '..', 'images')
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/images/')) {
            const file = path.join(imagesDir, req.url.slice(8))
            if (fs.existsSync(file) && fs.statSync(file).isFile()) {
              res.setHeader('Content-Type', getMime(path.extname(file)))
              fs.createReadStream(file).pipe(res)
              return
            }
          }
          next()
        })
      },
    },
  ],
})

function getMime(ext) {
  const m = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.gif': 'image/gif' }
  return m[ext?.toLowerCase()] || 'application/octet-stream'
}
