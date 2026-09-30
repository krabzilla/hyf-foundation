## 1. Three new things I learned from AI

1. A custom font has to be loaded, not just named. Writing font-family "Inter" only works if the font is fetched from Google Fonts with a link or @importand it should have a fallback font.
2. For randon color feature, Math.random() gives a decimal between 0 and 1, multiplying sets the range, Math.floor() rounds it down, and adding
   a number shifts the range.
3. For Mobile responsive design: the base CSS is written for phones, and a @media (min-width: 768px) block adjusts it for larger screens.

## 2. Where I had to tweak or correct the AI's suggestions

My first prompt gave a generic introduction ("passionate learner") and listed
HTML, CSS and JavaScript as my skills, so I rewrote the prompt with facts about
my legal tech background. The first output was also only a fragment without a <head> or viewport tag, which I had to ask for. I asked for only light random
colours, but the code could produce mid-grey backgrounds where the text was hard
to read so I changed the numbers by hand. I also fixed small text errors such
as "AIGovernance" missing a space.

## 3. Generating code vs. using AI as a learning partner

When AI only generates code, I get a working page quickly but cannot explain or
change it later. Using it as a learning partner means working in small steps,
asking it to explain each line, and reading the code before accepting it. It
also means testing the result myself instead of trusting it; the colour bug was
only found by checking the numbers. The difference is whether I understand the
code at the end, not whether the page works.

## 4. Three risks of relying too much on AI at HackYourFuture

1. I skip the struggle of solving problems myself, so I do not build the
   problem-solving skills I need for interviews and real work.
2. AI output can look correct and still be wrong, and without the basics I
   would not notice.
3. I could submit code I cannot explain, which hides gaps from my mentors and
   from myself, and leaves me stuck when no AI tool is available.