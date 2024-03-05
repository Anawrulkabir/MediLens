// post load
//...............................................
const loadPost = async (searchText = 'comedy', isClicked) => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
  const response = await fetch(url)
  const data = await response.json()
  const allpost = data.posts // it is an array

  displayPost(allpost, isClicked)
  //   clickMe(allpost)
  //   changeData(data)
}

const displayPost = (posts, isClicked) => {
  // changing the image with indicator
  const imgWithIndicator = document.getElementById('left-side-content-posts')
  imgWithIndicator.textContent = ''

  let postCount = 0

  posts.forEach((post) => {
    // console.log(post)

    const newDiscussionPost = document.createElement('div')
    newDiscussionPost.classList = `flex gap-6 lg:gap-6 p-5 lg:p-10 bg-[#797DFC1A] rounded-3xl border-[#797DFC] border-[1px]`

    newDiscussionPost.innerHTML = `
    
            <!-- left side active/inactive img -->
            <div class="indicator  ">
                <span id="badge-sign" class="indicator-item badge badge-success  border-solid border-1 border-white rounded-full "></span>
                <div id="image-with-indicator"
                    class="grid w-16 lg:w-20 h-16 lg:h-20 bg-base-300 place-items-center rounded-2xl">
                    
                     <!--  <img src="${post.image}" alt="" class="rounded-xl" > -->
                     <img src="/images/icons/medicine.png" alt="" class="rounded-xl" >
                </div>
            </div>
            <!-- right side description -->
            <div class ="flex-1">
                <div class="flex  items-center gap-5 text-[12px]  lg:text-[14px] font-bold lg:font-medium text-[#12132DCC] mb-3">
                    <p># <span>Medicine</span></p>
                    <p>Doctor : Dr. Lutfor Rahman</p>
                </div>
                <div class="mb-5">
                    <h1 class="text-[20px] font-bold text-[#12132D] mb-4">Doxycycline</h1>
                    <p class="text-[16px] font-normal text-[#12132D99]">Generic: Doxycycline 100mg/capsule</p>
                    <p class="text-[16px] font-normal text-[#12132D99]">Type: Capsule</p>
                    <p class="text-[16px] font-normal text-[#12132D99]">Price : ৳20.46</p>
                </div>
                <hr class="mb-5">
                <div class="flex justify-between items-center gap-4 text-[#12132D99]">
                    <!-- icons -->
                    <div class="flex justify-between gap-2  lg:gap-6 ">
                        <div class="flex justify-between items-center gap-1 lg:gap-3">
                            <div><img src="/images/icons/message-icon.svg" alt=""></div>
                            <div>
                                <p>${post.comment_count}</p>
                            </div>
                        </div>
                        <div class="flex justify-between  items-center gap-1 lg:gap-3">
                            <div><img src="/images/icons/tabler-icon-eye.svg" alt=""></div>
                            <div>
                                <p>${post.view_count}</p>
                            </div>
                        </div>
                        <div class="flex justify-between   items-center gap-1 lg:gap-3">
                            <div><img src="/images/icons/clock-icon.svg" alt=""></div>
                            <div>
                                <p>${post.posted_time}</p>
                            </div>
                        </div>
                    </div>
                    <!-- email -->
                    <div>
                        <button id="clickable-message-btn" onclick="updateData('${post.title}','${post.view_count}')" class="btn bg-transparent border-0 hover:bg-transparent shadow-none p-0">
                            <img src="/images/icons/email 1.svg" alt="">
                        </button>
                    </div>

                </div>

            </div>


    `

    if (post.isActive === false) {
      const isActive = document.getElementById('badge-sign')
      isActive.classList.replace('badge-success', 'badge-error')
    }
    if (postCount > 0) {
      newDiscussionPost.classList.replace(
        'border-[#797DFC]',
        'border-[#F3F3F5]'
      )
    }
    imgWithIndicator.appendChild(newDiscussionPost)

    postCount++

    // const displayedTitle = document.getElementById('displayed-title')
    // displayedTitle.innerText = post.title

    // const watchTime = document.getElementById('watch-time')
    // watchTime.innerText = post.view_count
  })
  toggleSpinner(false)
}
//...............................................

//...............................................
// latest post
const latestPost = async () => {
  const response = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/latest-posts'
  )
  const allItems = await response.json()
  //   console.log(allItems)
  //   console.log(allItems.length)
  //   console.log(allItems[0])

  displayLatestPost(allItems)
}

const displayLatestPost = (allItem) => {
  const latestPostUpdate = document.getElementById('latest-post-update')

  for (let i = 0; i < 3; i++) {
    let item = allItem[i]
    const newPostCard = document.createElement('div')
    newPostCard.classList = `flex flex-col p-6 border-[1px] border-[#12132D26] bg-white rounded-3xl`
    newPostCard.innerHTML = `
   
       <div class="mb-[25px]">
         <img src="${item.cover_image}" alt="" class="rounded-xl"></div>
         <div class="flex flex-row mb-[15px] gap-2">
         <!-- icon -->
         <div>
            <img src="images/icons/calender.svg" alt="">
         </div>
         <!-- date -->
         <div>
            <p class="text-[16px] font-normal  text-[#12132D99]">${
              item?.author?.posted_date
                ? item.author.posted_date
                : 'No Publish Date'
            }</p>
         </div>
       </div>
       <div class="mb-[12px]">
        <h1 class="text-[18px] font-bold text-[#12132D]">What will a mars habitat force that impact
            in
            our daily life!!!</h1>
       </div>
       <div class="mb-[16px]">
            <p class="text-[16px] font-normal  text-[#12132D99]">Yes, you can run unit tests and view
            the
            results directly within the app. </p>
       </div>
       <div class="flex gap-4 items-center">
         <div><img src="${
           item.profile_image
         }" alt="" class="w-11 h-11 rounded-full"></div>
         <div class="flex flex-col gap-1">
            <div>
                <p class="text-[16px] font-bold text-[#12132D]">${
                  item.author.name
                }</p>
            </div>
            <div>
                <p class="text-[14px] font-normal  text-[#12132D99]">${
                  item?.author?.designation
                    ? item.author.designation
                    : 'Unknown'
                }</p>
            </div>
         </div>
       </div>
  
    `
    latestPostUpdate.appendChild(newPostCard)
  }
}

// Search functionality

const getNewCategoryBySearch = (isClicked) => {
  toggleSpinner(true)
  const searchHereAnything = document.getElementById('search-here-anything')
  const inputText = searchHereAnything.value
  //   console.log(inputText)
  loadPost(inputText, isClicked)
}
loadPost()
latestPost()
//...............................................

// onclick functionality on message icon for displaying content in right section

// update the value of counter
let counter = 0
const clickMe = () => {
  //...............................................
  counter++
  const addCounterValue = document.getElementById('message-count')
  addCounterValue.innerText = counter
  //...............................................
  //   const addNewComment = document.getElementById('add-new-comment')
  //   const newCommentDiv = document.createElement('div')
  //   newCommentDiv.classList = `p-4 flex justify-between items-center bg-white rounded-2xl`
  //   newCommentDiv.innerHTML = `

  //         <div>
  //                 <p id="displayed-title">It is one thing to subject yourself to a costume mishap</p>
  //         </div>

  //         <div class="flex gap-2">
  //                 <div class="w-7 h-7">
  //                 <img src="/images/icons/tabler-icon-eye.svg" alt="">
  //                 </div>
  //         <div>
  //                 <p id="watch-time">1,568</p>
  //         </div>

  //   `
  //   addNewComment.appendChild(newCommentDiv)
  //...............................................
}
const updateData = (title, count) => {
  clickMe()
  const addNewComment = document.getElementById('add-new-comment')
  const newCommentDiv = document.createElement('div')
  newCommentDiv.classList = `p-4 flex justify-between items-center bg-white rounded-2xl`
  newCommentDiv.innerHTML = `
         
          <div>
                  <p id="displayed-title">${title}</p>
          </div>
                                          
          <div class="flex gap-2">
                  <div class="w-7 h-7">
                  <img src="/images/icons/tabler-icon-eye.svg" alt="">
                  </div>
          <div>
                  <p id="watch-time">${count}</p>
          </div>
                                          
    `
  addNewComment.appendChild(newCommentDiv)
}

// loading spinner

const toggleSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner')
  const post = document.getElementById('left-side-content-posts')
  // loadingSpinner.classList.remove('hidden')
  if (isLoading) {
    loadingSpinner.classList.remove('hidden')
    post.classList.add('hidden')

    setTimeout(() => {
      loadingSpinner.classList.add('hidden')
      post.classList.remove('hidden')
    }, 2000)
  } else {
    //loadingSpinner.classList.add('hidden')
  }
}

const toggleSpinnerNew = () => {
  const leatestSpinner = document.getElementById('loading-spinner-leatest')
  const leatestPost = document.getElementById('latest-post-update')

  leatestSpinner.classList.remove('hidden')
  leatestPost.classList.add('hidden')
  setTimeout(() => {
    leatestPost.classList.remove('hidden')
    leatestSpinner.classList.add('hidden')
  }, 2000)
}
toggleSpinnerNew()
