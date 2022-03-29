// 동영상 미리보기
let input = document.querySelectorAll(".video-input")
let video = document.querySelectorAll("#video")
let videoSource = document.createElement("source")

if (input) {
  input.forEach((v, i) => {
    v.addEventListener("change", function () {
      const files = this.files || []

      if (!files.length) return

      const reader = new FileReader()

      reader.onload = function (e) {
        videoSource.setAttribute("src", e.target.result)
        video[i].appendChild(videoSource)
        video[i].load()
        // video[i].play()
      }

      reader.onprogress = function (e) {
        // console.log("progress: ", Math.round((e.loaded * 100) / e.total))
        video[i].classList.remove("d-none")
      }

      reader.readAsDataURL(files[0])
    })
  })
}

document.querySelector(".add_video").addEventListener("click", () => {
setTimeout(() => {
      input = document.querySelectorAll(".video-input")
      video = document.querySelectorAll("#video")
      videoSource = document.createElement("source")

      if (input) {
        input.forEach((v, i) => {
          v.addEventListener("change", function () {
            const files = this.files || []

            if (!files.length) return

            const reader = new FileReader()

            reader.onload = function (e) {
              videoSource.setAttribute("src", e.target.result)
              video[i].appendChild(videoSource)
              video[i].load()
              // video[i].play()
            }

            reader.onprogress = function (e) {
              // console.log("progress: ", Math.round((e.loaded * 100) / e.total))
              video[i].classList.remove("d-none")
            }

            reader.readAsDataURL(files[0])
          })
        })
      }
    }, 0);
  })