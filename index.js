
document.querySelector('.submit-button').addEventListener('click', function() {
    var inputValue = document.querySelector('.large-input').value;
    console.log(inputValue);
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${inputValue}`)
    .then(function(response)
    {
        // handle success
        const player = response.data.data[0]
        const firstName = player.first_name
        const lastName = player.last_name
        const team = player.team.name
        const position = player.position
        const conference = player.team.conference
        const division = player.team.division
        const height = player.height_feet + "' " + player.height_inches + '"'
        console.log(response)

        var table = document.getElementById('myTable');
        var row = table.insertRow(-1);
        let cells = []
        for (var i = 0; i < 6; i++) {
            cells[i] = row.insertCell(i)
        }
        cells[0].innerHTML = firstName + ' ' + lastName;
        cells[1].innerHTML = team;
        cells[2].innerHTML = conference 
        cells[3].innerHTML = division
        cells[4].innerHTML = position;
        cells[5].innerHTML = height

    })
    .catch(function (error) {
        // handle error
        console.log(error)
    })
    .finally(function () {
        // always executed
    });
});






