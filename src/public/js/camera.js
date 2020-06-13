const video = document.querySelector("#cameraVideo");

console.log(video.getBoundingClientRect());

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(err0r => {
      console.log("Something went wrong!");
      console.log(err0r);
    });
}