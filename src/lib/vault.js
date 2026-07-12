import fs from 'fs'
import path from 'path'

/**
 * Mapping from raw filenames to user-friendly tab labels.
 * Files not in this map get auto-generated labels from their filename.
 */
const LABEL_MAP = {
  'Content_and_SEO_Strategy': 'SEO & Content',
  'Product_Vision_and_Pitch': 'Vision & Pitch',
  'Target_Audience_and_Personas': 'Target Audience',
  'Public_IP_Disclosure': 'Public IP Policy',
  'Known_Issues_and_Debt': 'Tech Debt',
  'Memory_and_Video_Rendering': 'Tech Debt',
  'Environment_and_Dependencies': 'Dev Environment',
  'Vertical_Expansion': 'Expansion Plan',
  'Video_Expansion_Pipeline': 'Expansion Plan',
  'Data_and_State_Model': 'Data Model',
  'The_6_Layer_Platform': 'Architecture',
  'API_and_GPU_Infrastructure': 'Infrastructure',
}

/**
 * Reads all public .md files for a given product and returns
 * an array of { slug, label, content } objects, sorted alphabetically by label.
 * The product's index file (e.g. CiteWeave.md) is excluded since
 * it's a navigation dashboard, not content.
 *
 * Runs server-side at build time only.
 */
export function getVaultContent(productName) {
  const dirPath = path.join(process.cwd(), 'src', 'content', 'products', productName)

  if (!fs.existsSync(dirPath)) {
    return []
  }

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'))

  const docs = []
  for (const file of files) {
    const slug = file.replace('.md', '')

    // Skip the product's own index/dashboard file
    if (slug === productName) continue

    const content = fs.readFileSync(path.join(dirPath, file), 'utf8')
    const label = LABEL_MAP[slug] || slug.replace(/_/g, ' ')

    docs.push({ slug, label, content })
  }

  // Sort alphabetically by label
  docs.sort((a, b) => a.label.localeCompare(b.label))

  return docs
}
