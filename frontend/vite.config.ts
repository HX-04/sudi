import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const VIDEOS_DIR = path.resolve('../../CURSOR 00/videos')

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'video-server',
      configureServer(server) {
        server.middlewares.use('/api/video', (req, res) => {
          const filename = decodeURIComponent(req.url?.slice(1) || '')
          if (!filename) {
            res.statusCode = 400
            res.end('Missing filename')
            return
          }

          // 先在 videos 目录找，再在 website 目录找
          const possiblePaths = [
            path.join(VIDEOS_DIR, filename),
            path.join(path.resolve('../../CURSOR 00/website'), filename),
          ]

          for (const filePath of possiblePaths) {
            if (fs.existsSync(filePath)) {
              const stat = fs.statSync(filePath)
              res.writeHead(200, {
                'Content-Type': 'video/mp4',
                'Content-Length': stat.size,
                'Accept-Ranges': 'bytes',
              })
              fs.createReadStream(filePath).pipe(res)
              return
            }
          }

          res.statusCode = 404
          res.end('Video not found')
        })
      },
    },
  ],
  server: {
    port: 5173,
  },
})
