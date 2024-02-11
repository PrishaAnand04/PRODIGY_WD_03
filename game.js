var buttons = document.querySelectorAll(".btn");
        var currentPlayer = 'X'; // Initialize the current player

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                if (button.textContent === '') { // Check if the button is empty
                    button.textContent = currentPlayer;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Toggle player
                }
            });
        });
        function ga(){
            document.getElementById("turn").style.display='block';
            document.getElementById("line").style.display='block';
            document.getElementById("gb").style.display='inline';
            document.getElementById("ti").style.display='none';
            document.getElementById("reset-button").style.display='inline';
            document.getElementById("select").style.display='none';

        }
        
        const turnIndicator = document.getElementById('turn');
        let currentTurn = "Player 1";

        document.addEventListener('click', () => {
        currentTurn = currentTurn === "Player 1" ? "Player 2" : "Player 1";
        turnIndicator.textContent = `${currentTurn}'s turn`;
        });

        var resetButton = document.getElementById("reset-button");
        resetButton.addEventListener("click", () => {
        buttons.forEach(button => {
            button.textContent = '';
        });
        turnIndicator.textContent='';
    });