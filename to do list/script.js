let search = document.querySelector("#search input[type = 'text']")
let list = document.querySelector("#to-do-list")
let addInput = document.querySelector("#add-form input")
let add_btn = document.querySelector("#add-form button")


let count = document.createElement("b")
let body = document.querySelector("body")
body.appendChild(count)
count.id = "count"




list.addEventListener("click", (e) => {
    if (e.target.nodeName == "SPAN" && e.target.className == "delete-btn") {

        count.innerText = "total number of tasks : " + (list.children.length - 1)


        e.target.parentNode.remove()

        if (list.children.length == 0) {
            list.innerHTML = "<div id='msg'>there is no task to do</div>"

            document.querySelector("#msg").style.fontWeight = "bolder"
            document.querySelector("#msg").style.fontSize = "xx-large"
            document.querySelector("#msg").style.userSelect = "none"
            document.querySelector("#msg").id = "emptyMsg"


        }

    } else {
        return console.log(false);
    }
})



add_btn.addEventListener("click", (e) => {

    count.innerText = "total number of tasks : " + (list.children.length + 1)





    e.preventDefault();
    if (document.querySelector("#emptyMsg")) {

        document.querySelector("#emptyMsg").remove()

    }
    if (addInput.value != "") {

        list.appendChild(createListItem(addInput.value))

        addInput.value = ""

    }
})


search.addEventListener("input", (e) => {




    Array.from(list.children).forEach(element => {
        if (element.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            element.style.display = "flex"
        } else {
            element.style.display = "none"
        }

    })

})







function createListItem(itemValue) {
    let item = document.createElement("li")
    let title = document.createElement("span")
    let btn = document.createElement("span")

    title.className = "title"
    title.innerText = itemValue;

    item.className = "to-do-item"
    btn.className = "delete-btn"
    btn.innerText = "delete"

    item.appendChild(title)
    item.appendChild(btn)

    return item;
}

