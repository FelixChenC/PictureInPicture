const videoElement = document.getElementById("video");
const button = document.getElementById("button");
const select = document.getElementById("select");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Catch error
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

// On load
select.addEventListener("click", selectMediaStream);
