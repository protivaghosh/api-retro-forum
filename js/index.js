const loadAllPost=async()=>{
//   const response=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
//   const data = await response.json()
//       console.log(data.posts)
// }
loadAllPost()
const handleSearchByCategory=()=>{
    const searchText=document.getElementById('searchPosts').value;
    console.log(searchText);
}