let buttonAddImage = document.querySelector(".buttonAddImage");
let buttonFeedImage = document.querySelector(".buttonFeedImage");
let newPicture = document.querySelector(".newPicture");
let addPicture = document.querySelector(".addPicture")
let buttonCancel = document.querySelector(".buttonCancelAdd")
let body = document.querySelector("body")



const addImage = () => {
    let display = window.getComputedStyle(newPicture).getPropertyValue("display");
    if (display === "block") {
        newPicture.style.display = "none";
    } else {
        newPicture.style.display = "block";
    }
}


const addPictureFunction = () => {
    let inputUrl = document.querySelector("#newPicUrl").value;

    const left = document.createElement("button");
    const leftContent = document.createTextNode("<");
    left.appendChild(leftContent);
    left.classList.add("left");
    left.classList.add("buttons");

    const right = document.createElement("button");
    const rightContent = document.createTextNode(">");
    right.appendChild(rightContent);
    right.classList.add("right");
    right.classList.add("buttons");

    const sizeUp = document.createElement("button");
    const upContent = document.createTextNode("+");
    sizeUp.appendChild(upContent);
    sizeUp.classList.add("sizeUp");
    sizeUp.classList.add("buttons");

    const sizeDown = document.createElement("button");
    const downContent = document.createTextNode("-");
    sizeDown.appendChild(downContent);
    sizeDown.classList.add("sizeDown");
    sizeDown.classList.add("buttons");

    const deleteImage = document.createElement("button");
    const deleteContent = document.createTextNode("D");
    deleteImage.appendChild(deleteContent);
    deleteImage.classList.add("deleteImage");
    deleteImage.classList.add("buttons");

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttonsDiv");

    buttonDiv.appendChild(sizeUp)
    buttonDiv.appendChild(sizeDown)
    buttonDiv.appendChild(left)
    buttonDiv.appendChild(right)
    buttonDiv.appendChild(deleteImage)



    if (!inputUrl) {
        return
    } else if (inputUrl) {
        const img = document.createElement("img");
        img.classList.add("image");
        const div = document.createElement("div");
        div.classList.add("container");
        div.classList.add("size5");
        img.src = inputUrl;
        console.log(img.src)
        img.width = 300;
        img.height = 300;
        div.appendChild(img)
        div.appendChild(buttonDiv)
        document.body.appendChild(div);
    }
    let display = window.getComputedStyle(newPicture).getPropertyValue("display");
    if (display === "block") {
        newPicture.style.display = "none";
    } else {
        newPicture.style.display = "block";
    }
}


const cancel = () => {
    let display = window.getComputedStyle(newPicture).getPropertyValue("display");
    if (display === "block") {
        newPicture.style.display = "none";
    } else {
        newPicture.style.display = "block";
    }
}


const clear = () => {
    const div = document.querySelectorAll(".container")
    for (let i = 0; i < div.length; i++) {
        div[i].remove();
    }
    let display = window.getComputedStyle(newPicture).getPropertyValue("display");
    if (display === "block") {
        newPicture.style.display = "none";
    }
}


const feed = () => {

    let seed = Math.floor(Math.random() * 300000)
    for (let i = 0; i < 10; i++) {

        const left = document.createElement("button");
        const leftContent = document.createTextNode("<");
        left.appendChild(leftContent);
        left.classList.add("left");
        left.classList.add("buttons");

        const right = document.createElement("button");
        const rightContent = document.createTextNode(">");
        right.appendChild(rightContent);
        right.classList.add("right");
        right.classList.add("buttons");

        const sizeUp = document.createElement("button");
        const upContent = document.createTextNode("+");
        sizeUp.appendChild(upContent);
        sizeUp.classList.add("sizeUp");
        sizeUp.classList.add("buttons");

        const sizeDown = document.createElement("button");
        const downContent = document.createTextNode("-");
        sizeDown.appendChild(downContent);
        sizeDown.classList.add("sizeDown");
        sizeDown.classList.add("buttons");

        const deleteImage = document.createElement("button");
        const deleteContent = document.createTextNode("D");
        deleteImage.appendChild(deleteContent);
        deleteImage.classList.add("deleteImage");
        deleteImage.classList.add("buttons");

        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("buttonsDiv");

        buttonDiv.appendChild(sizeUp)
        buttonDiv.appendChild(sizeDown)
        buttonDiv.appendChild(left)
        buttonDiv.appendChild(right)
        buttonDiv.appendChild(deleteImage)

        let height = 300;
        let width = 300;
        let feedImages = `https://picsum.photos/seed/${seed}/${width}/${height}`;
        seed = Math.floor(Math.random() * 300000);
        const div = document.createElement("div");
        div.classList.add("container");
        const img = document.createElement("img");
        img.classList.add("image");
        div.classList.add("size5");
        img.src = feedImages;
        div.appendChild(img)
        div.appendChild(buttonDiv)
        document.body.appendChild(div);
    }
}

const deleteImage = () => {
    // let img = event.target.closest(".buttonsDiv")
    let img = event.target.closest(".container")
    img.style.display = "none"
}

const buttonsClear = () => {
    let image = document.querySelectorAll(".buttonsDiv")
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "none"
    }
}

const edit = () => {

    let imageButtons = document.querySelectorAll(".buttonsDiv")
    let edit = event.target.closest("div").querySelector(".buttonsDiv")
    let display = window.getComputedStyle(edit).getPropertyValue("display");
    let images = document.querySelectorAll("img")
    let image = event.target
    let container = event.target.closest("div")


    for (let i = 0; i < imageButtons.length; i++) {
        if (imageButtons[i].style.display === "inline-block") {
            images[i].classList.remove("edit");
            images[i].classList.add("full");
        } 
        imageButtons[i].style.display = "none"
        edit.style.display = display
        image.classList.remove("edit");
        
    }

    if (display === "none") {
        edit.style.display = "inline-block"
        image.classList.remove("size5");
        image.classList.remove("full");
        image.classList.add("edit");
    } else {
        edit.style.display = "none"
        image.classList.remove("edit");
    }
}

const sizeUp = () => {
    let img = event.target.closest(".container").querySelector("img")
    let container = event.target.closest(".container")
    console.log("hey")
    if (img.classList.contains("size0")) {
        img.classList.remove("size0");
        img.classList.add("size1");
        container.classList.remove("size0");
        container.classList.add("size1");
    } else if (img.classList.contains("size1")) {
        img.classList.remove("size1");
        img.classList.add("size2");
        container.classList.remove("size1");
        container.classList.add("size2");
    } else if (img.classList.contains("size2")) {
        img.classList.remove("size2");
        img.classList.add("size3");
        container.classList.remove("size2");
        container.classList.add("size3");
    } else if (img.classList.contains("size3")) {
        img.classList.remove("size3");
        img.classList.add("size4");
        container.classList.remove("size3");
        container.classList.add("size4");
    } else if (img.classList.contains("size4")) {
        img.classList.remove("size4");
        img.classList.add("size5");
        container.classList.remove("size4");
        container.classList.add("size5");
    } else if (container.className.includes("size5")) {
        img.classList.remove("size5");
        img.classList.add("size6");
        container.classList.remove("size5");
        container.classList.add("size6");
    } else if (img.classList.contains("size6")) {
        img.classList.remove("size6");
        img.classList.add("size7");
        container.classList.remove("size6");
        container.classList.add("size7");
    } else if (img.classList.contains("size7")) {
        img.classList.remove("size7");
        img.classList.add("size8");
        container.classList.remove("size7");
        container.classList.add("size8");
    } else if (img.classList.contains("size8")) {
        img.classList.remove("size8");
        img.classList.add("size9");
        container.classList.remove("size8");
        container.classList.add("size9");
    }
}
const sizeDown = () => {
    let img = event.target.closest(".container").querySelector("img")
    let container = event.target.closest(".container")
    console.log("hey")

    if (img.classList.contains("size1")) {
        img.classList.remove("size1");
        img.classList.add("size0");
        container.classList.remove("size1");
        container.classList.add("size0");
    } else if (img.classList.contains("size2")) {
        img.classList.remove("size2");
        img.classList.add("size1");
        container.classList.remove("size2");
        container.classList.add("size1");
    } else if (img.classList.contains("size3")) {
        img.classList.remove("size3");
        img.classList.add("size2");
        container.classList.remove("size3");
        container.classList.add("size2");
    } else if (img.classList.contains("size4")) {
        img.classList.remove("size4");
        img.classList.add("size3");
        container.classList.remove("size4");
        container.classList.add("size3");
    } else if (container.className.includes("size5")) {
        img.classList.remove("size5");
        img.classList.add("size3");
        container.classList.remove("size5");
        container.classList.add("size3");
    } else if (img.classList.contains("size6")) {
        img.classList.remove("size6");
        img.classList.add("size5");
        container.classList.remove("size6");
        container.classList.add("size5");
    } else if (img.classList.contains("size7")) {
        img.classList.remove("size7");
        img.classList.add("size6");
        container.classList.remove("size7");
        container.classList.add("size6");
    } else if (img.classList.contains("size8")) {
        img.classList.remove("size8");
        img.classList.add("size7");
        container.classList.remove("size8");
        container.classList.add("size7");
    } else if (img.classList.contains("size9")) {
        img.classList.remove("size9");
        img.classList.add("size8");
        container.classList.remove("size9");
        container.classList.add("size8");
    }
}

const left = () => {
    let img = event.target.closest(".container")
    let images = document.querySelectorAll(".container")

    for (i = 1; i <= images.length - 1; i++) {
        if (images[i] == img) {
            console.log("hey")
            let nextImg = images[i - 1]
            body.insertBefore(img, nextImg)
        }
    }
}

const right = () => {
    let img = event.target.closest(".container")
    let images = document.querySelectorAll(".container")

    for (i = 0; i < images.length - 1; i++) {
        if (images[i] == img) {
            console.log("hey")
            let nextImg = images[i + 2]
            body.insertBefore(img, nextImg)
        }
    }
}

feed()
body.addEventListener('click', (event) => {
    console.log('target', event.target)
    console.log('currenttarget', event.currentTarget)

    event.preventDefault();
    if (event.target.className === "buttonAddImage") {
        addImage()
    } else if (event.target.className.includes("addPicture")) {
        addPictureFunction()
    } else if (event.target.classList.contains("buttonCancelAdd")) {
        cancel()
    } else if (event.target.className.includes("buttonFeedImage")) {
        feed()
    } else if (event.target.className.includes("clear")) {
        clear()
    } else if (event.target.className.includes("deleteImage")) {
        deleteImage()
    } else if (event.target.classList.contains("image")) {
        edit()
    } else if (event.target.classList.contains("left")) {
        left()
    } else if (event.target.classList.contains("right")) {
        right()
    } else if (event.target.classList.contains("sizeUp")) {
        sizeUp()
    } else if (event.target.classList.contains("sizeDown")) {
        sizeDown()
    }
})

