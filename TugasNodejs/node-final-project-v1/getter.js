export default function mapUsers(users) {
  const datapengguna = {
    data : users,
    count : users.length
  }
  return datapengguna;
}

function mapArticles(articles) {
  const dataarticles = {
    data : articles,
    count : articles.length
  }
  return dataarticles;
}
export {mapArticles}