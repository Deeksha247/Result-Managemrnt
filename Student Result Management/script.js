document.getElementById('resultForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var marks = document.getElementById('marks').value;

  var resultRow = document.createElement('tr');
  resultRow.innerHTML = '<td>' + name + '</td><td>' + subject + '</td><td>' + marks + '</td><td><button onclick="deleteResult(this)">Delete</button></td>';

  document.getElementById('resultTable').appendChild(resultRow);

  document.getElementById('name').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('marks').value = '';
});

function deleteResult(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}