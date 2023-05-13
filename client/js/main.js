const userList = document.querySelector("main");

// GET request to the server to fetch the list of users
export function renderUsers() {
	// Fetch list of users from the server
	fetch("http://localhost:3000/users")
		.then((response) => response.json())
		.then((data) => {
			data.map((user) => {
				const userCard = document.createElement("div");
				userCard.innerHTML = `
            <div class="card">
              <img src="${user.profilePicture}" alt="Profile Picture">
              <h2>${user.firstName} ${user.lastName}</h2>
            </div>
          `;
				userList.appendChild(userCard);
			});
		})
		.catch((error) => console.error(error));
}

// Call function to display users right away 
renderUsers();