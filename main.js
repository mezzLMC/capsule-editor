import './style.css'


const inputElement = document.getElementById("tmb");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  console.log(fileList)
  const preview = document.getElementById("tmbPrev")
  preview.src = URL.createObjectURL(fileList[0])
}