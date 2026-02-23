let picture = document.querySelectorAll(".gallery-item") ;
let lightbox = document.querySelector(".lightbox");
let bigPic = document.getElementById("lightbox-image");
let close = document.getElementById("close-btn")

picture.forEach(function (pic) {
	pic.addEventListener("click", function () {
		lightbox.style.display = "flex";
		if (this.outerHTML.includes("../assets/ccAssets/art1.jpeg")) {
			bigPic.setAttribute("src", "../assets/ccAssets/art1.jpeg");
		} else if (this.outerHTML.includes("../assets/ccAssets/art2.webp")) {
			bigPic.setAttribute("src", "../assets/ccAssets/art2.webp");			
		} else if (this.outerHTML.includes("../assets/ccAssets/art3.webp")) {
			bigPic.setAttribute("src", "../assets/ccAssets/art3.webp");			
		}
	});
});


close.addEventListener("click", function () {
		lightbox.style.display = "none";
})

lightbox.addEventListener("click", function () {
		lightbox.style.display = "none";
})

