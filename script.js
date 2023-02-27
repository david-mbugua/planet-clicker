const finger = document.querySelector("#finger");
const bang1 = document.querySelector("#bang1");
const bang2 = document.querySelector("#bang2");
const bang3 = document.querySelector("#bang3");

console.log(finger);
finger.addEventListener("click", () => {
  finger.style.display = "none";
  bang1.style.display = "block";
  setTimeout(() => {
    bang1.style.display = "none";
    bang2.style.display = "block";
    setTimeout(() => {
      bang2.style.display = "none";
      bang3.style.display = "block";
      setTimeout(() => {
        // Redirect to the final map after the animation is done.
        window.location.href = "map.html";
      }, 1000);
    }, 1000);
  }, 1000);
});

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  var button = document.getElementById("button");

  // Add a click event listener to the button element
  button.addEventListener("click", function () {
    // Call the ExitApi.exit() method to exit the ad and open the clickTag URL in a new window
    ExitApi.exit(window.clickTag);
  });
});

