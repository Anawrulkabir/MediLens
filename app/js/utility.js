const newFunc = async (search) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${search}`
  )
  const data = await response.json()
  const allPost = data.posts
  console.log(data)

  allPost.forEach((element) => {
    const title = element.title
    const view = element.view_count

    console.log(title)
    console.log(view)
  })
}
newFunc('comedy')
