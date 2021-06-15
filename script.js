function giveActivity() {
  const activities = 
    {"Draw your someone from your perspective": "For example, your friend", 
    "Write a short story": "Get started with Google Docs!", 
    "Do some Origami": "Watch some youtube videos for a start!",
    "Research excessively on a subject that interests you": "Perhaps Astronomy?",
    "Memorise a paragraph of text from anywhere": "Storybooks are a great place to start", 
    "Build a pillow fort": "You could even sleep in it for the night!",
    "Come up with your own writing font": "You could print out a template and then turn it into an actual font!",
    "Organize your room": "You can now find your books much easier!", 
    "Rate your favourites (snacks, movies, etc.)": "It's all about you, so don't search online or ask anyone", 
    "Colour a colouring book": "You can start with some old colouring books you didn't use as a kid!", 
    "Read a book": "Harry Potter perhaps?", 
    "Go for a walk": "Appreciate your neighbourhood!", 
    "Make a craft": "You could even invent your own!", 
    "Scrapbooking": "Recent travels are great for a start!", 
    "Plan a perfect trip": "You could list things you want to do, places you want to go, etc.", 
    "Grow a plant": "Remember to water it!", 
    "Play with your food and make something": "Make a face, car, or a building... just eat it after!", 
    "Test your limits at home (memory, typing, etc.)": "humanbenchmark.com is a great place to test yourself!", 
    "Learn to draw a perfect freehand circle": "Get some pens and paper, and don't give up!", 
    "Break something": "Sometimes breaking something helps us destress.", 
    "Make a friend from a stranger": "It might be awkward, but you might meet a very special person in your life!", 
    "Practice typing": "You can go practice by typing out your homework!", 
    "Read through a full scientific paper": "About the creation of the Phizer vaccine?", 
    "Write song lyrics": "You could write new lyrics to a song that already exists", 
    "Watch a stranger's television from your room": "It's oddly addicting", 
    "Try to talk to a stranger on a floor above yours": "It's like a pen pal, only you shout to one another.", 
    "Watch strangers turn off their lights when they go to sleep": "You might have to stay up late, but its cool."
    };

  var text = Object.keys(activities);
  var num = Math.floor(Math.random() * 26);
  var activity = text[num];
  document.getElementById('activity').innerText = activity;

  var resource = activities[activity];
  document.getElementById('helping-resource').innerText = resource;
}