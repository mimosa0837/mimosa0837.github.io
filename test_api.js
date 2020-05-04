const btn1 = document.getElementById("btn1")
btn1.onclick = () => {
    axios.get("http://localhost:3000/posts")
}