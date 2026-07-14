function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('datetime').innerText = now.toLocaleDateString('en-US', options);
}

setInterval(updateDateTime, 1000);
updateDateTime();

function toggleCard(element) {
    element.classList.toggle('active');
    const subtitle = element.querySelector('p');
    const isNowActive = element.classList.contains('active');
    
    // Simulate state change
    if(subtitle.innerText.includes("Light")) {
        subtitle.innerText = isNowActive ? "All Lights On" : "All Lights Off";
    } else if (subtitle.innerText.includes("AC") || subtitle.innerText.includes("Off") || subtitle.innerText.includes("Cooling")) {
        subtitle.innerText = isNowActive ? "Cooling to 22°C" : "Off";
    } else if (subtitle.innerText.includes("Door") || subtitle.innerText.includes("Locked") || subtitle.innerText.includes("Unlocked")) {
        subtitle.innerText = isNowActive ? "Locked" : "Unlocked";
    }
}
