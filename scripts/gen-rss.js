import { promises as fs } from 'fs'
import path, { dirname } from 'path'
import RSS from 'rss'
import matter from 'gray-matter'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function generate() {
  const feed = new RSS({
    title: 'Andy Hammond',
    description: '👋 Welcome to my little corner of the internet',
    site_url: 'https://andax.tech',
    feed_url: 'https://andax.tech/feed.xml'
  })

  const allLinks = []
  const libraryItems = await fs.readdir(
    path.join(__dirname, '..', 'pages', 'resource-library')
  )
  const projectsItems = await fs.readdir(
    path.join(__dirname, '..', 'pages', 'projects')
  )

  await Promise.all(
    libraryItems.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'resource-library', name)
      )
      const frontmatter = matter(content)

      allLinks.push({
        title: frontmatter.data.title,
        url: '/resource-library/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    })
  )

  await Promise.all(
    projectsItems.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'projects', name)
      )
      const frontmatter = matter(content)

      allLinks.push({
        title: frontmatter.data.title,
        url: '/projects/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    })
  )

  allLinks.sort((a, b) => new Date(b.date) - new Date(a.date))
  allLinks.forEach((link) => {
    feed.item(link)
  })
  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
