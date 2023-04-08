const loadJokes = async () => {
  try {
    const res = await fetch(`https://icanhazdadjoke.com/slack`);
    const data = await res.json();
    const jokeText = data.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML = jokeText;
  } catch (err) {
    console.error(err);
  }
};

loadJokes();
