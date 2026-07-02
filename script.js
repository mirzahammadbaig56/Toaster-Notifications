let container = document.querySelector(".container");

function createToaster(config) {

    return function (msg) {

        container.style.top = "auto";
        container.style.bottom = "auto";
        container.style.left = "auto";
        container.style.right = "auto";

        let div = document.createElement("div");
        div.classList.add("notification");

        config.positionX === "left" ? container.style.left = "10px" : container.style.right = "10px";

        config.positionY === "top" ? container.style.top = "15px" : container.style.bottom = "15px";

        config.theme === "light" ? div.style.backgroundColor = "rgba(219, 219, 219, 1)" : div.style.backgroundColor = "rgba(0, 0, 0, 0.625)";

        config.theme === "light" ? div.style.color = "black" : div.style.color = "white";

        div.textContent = msg;

        container.appendChild(div);

        setTimeout(() => {
            container.removeChild(div);
        }, config.duration * 1000);
    }
}

let notification = createToaster({
    positionX: "left",
    positionY: "bottom",
    theme: "dark",
    duration: 3,
});

notification("Download Started!");
setTimeout(() => {
    notification("Downloading...");
}, 1000);
setTimeout(() => {
    notification("Downloaded Successfully :)");
}, 5000);
