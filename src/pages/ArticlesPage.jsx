import profile from '../data/profile'
import ArticlesSection from '../components/sections/ArticlesSection'

function ArticlesPage() {
  return (
    <ArticlesSection
      description={profile.pageHeaders.articles.description}
      id="articles"
      title={profile.pageHeaders.articles.title}
    />
  )
}

export default ArticlesPage
