document.getElementById('betForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const betAmount = document.getElementById('betAmount').value;
    const betChoice = document.getElementById('betChoice').value;
    const resultDiv = document.getElementById('result');

    if (betChoice) {
        resultDiv.innerHTML = `You have placed a bet of $${betAmount} on ${betChoice}.`;
    } else {
        resultDiv.innerHTML = 'Please select a team to bet on.';
    }
});
