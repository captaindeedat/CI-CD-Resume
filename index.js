async function updateVisitors() {
		  try {
			const response = await fetch('https://ambyht7qjihcnn7dap5fupgt6y0dmimi.lambda-url.us-east-1.on.aws/');
			const data = await response.json();
			document.getElementById('visitors').innerHTML = data;
		  } catch (error) {
			console.error(error);
		  }
		}
		
		window.onload = function() {
				  updateVisitors();
				};
	