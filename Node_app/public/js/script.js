document.getElementById('APIbutton').addEventListener
(
'click', ()=>
{

var params = new URLSearchParams();
params.append
(
document.getElementById('name').value,
document.getElementById('role').value
);


axios.get('http://localhost:3000/entities', {params})
	.then
(
response => 
{
document.getElementById('error').textContent = JSON.stringify(response.data);
alert('Axios done!');
}
)
	.catch
(
error => 
{
alert('Axios error! ', error);
console.error('Error fetching data:', error); 
document.getElementById('error').textContent = 'Ошибка: ' + error.message;
}
);

}
);
