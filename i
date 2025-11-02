document.getElementById('getValueButton').addEventListener('click', function() {
    const inputValue = document.getElementById('myInput').value;
    document.getElementById('output').innerText = `Input Value: ${inputValue}`;
});   