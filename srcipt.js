let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let isPaused = false;

window.speechSynthesis.onvoiceschanged = () => {
  console.log("Voices changed");
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  if (isPaused) {
    window.speechSynthesis.resume();
    isPaused = false;
  } else {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
  }
});

document.querySelector("#pauseButton").addEventListener("click", () => {
  if (!isPaused) {
    window.speechSynthesis.pause();
    isPaused = true;
  }
});
