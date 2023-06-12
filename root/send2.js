/*function sendNumberToPHP2(number) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8000/py2.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let response = xhr.responseText;
            console.log(response);
        }
    };

    xhr.send("data=" + number);
    event.preventDefault(); 
}*/


function sendNumberToPHP2(number) {
    fetch('http://192.168.1.136:6000/py2.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'data=' + number
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Hiba történt:', error);
    });
}
