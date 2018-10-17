const http = new EasyHTTP;

// get users
// http.get('https://jsonplaceholder.typicode.com/users')
// 	.then(result => console.log(result))
// 	.catch( error => console.log(error))

// create user data
const data = {
	name: 'John D',
	username: 'johnD',
	email: 'john@d.com'
}
// create user
// http.post('https://jsonplaceholder.typicode.com/users', data)
	// .then(data => console.log(data))
	// .catch(error => console.log(error))

// update post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(error => console.log(error))

// Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(error => console.log(error))
