// script.js
document.getElementById('startButton').addEventListener('click', function() {
    const normalTraffic = document.getElementById('normalTraffic');
    const attackTraffic = document.getElementById('attackTraffic');
    const server = document.getElementById('server');

    // Simulate normal traffic
    normalTraffic.style.height = '100%';

    // Simulate DDoS attack
    setTimeout(() => {
        attackTraffic.style.height = '100%'; // Flood the server with attack traffic
        normalTraffic.style.height = '50%'; // Reduce normal traffic
        server.style.backgroundColor = 'red'; // Change server color to indicate overload
    }, 2000); // Start attack after 2 seconds

    // Simulate prevention strategies
    setTimeout(() => {
        attackTraffic.style.height = '0'; // Stop attack traffic
        normalTraffic.style.height = '100%'; // Restore normal traffic
        server.style.backgroundColor = 'green'; // Change server color back to normal
    }, 5000); // End attack after 5 seconds
});