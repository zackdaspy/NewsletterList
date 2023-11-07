function login()
{
	var uname = document.getElementById("email").value;
	var pwd = document.getElementById("pwd1").value;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(uname =='')
	{
		alert("please enter user name.");
	}
	else if(pwd=='')
	{
        alert("enter the password");
	}
	else if(!filter.test(uname))
	{
		alert("Enter valid email id.");
	}
	else if(pwd.length < 6 || pwd.length > 6)
	{
		alert("Password min and max length is 6.");
	}
	else
	{
	alert('Thank You for Login & You are Redirecting to Google');
  //Redirecting to other page or webste code or you can set your own html page.
       window.location = "https://google.com/";
		}
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}	
	

    
var currentPage = 1;
var itemsPerPage = 10;
var totalItems = 50; // Total number of items

function generatePagination() {
    var pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    var prevButton = document.createElement("li");
    var prevLink = document.createElement("a");
    prevLink.href = "#";
    prevLink.textContent = "Previous";
    prevLink.addEventListener("click", function () {
    if (currentPage > 1) {
        currentPage--;
            updateContent();
            }
    });
prevButton.appendChild(prevLink);
pagination.appendChild(prevButton);

var totalPages = Math.ceil(totalItems / itemsPerPage);

for (var i = 1; i <= totalPages; i++) {
        var pageButton = document.createElement("li");
        var pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.textContent = i;
        pageLink.addEventListener("click", function () {
                currentPage = parseInt(this.textContent);
                updateContent();
        });
        pageButton.appendChild(pageLink);
        pagination.appendChild(pageButton);
    }

    var nextButton = document.createElement("li");
    var nextLink = document.createElement("a");
    nextLink.href = "#";
    nextLink.textContent = "Next";
    nextLink.addEventListener("click", function () {
    if (currentPage < totalPages) {
        currentPage++;
        updateContent();
        }
    });
    nextButton.appendChild(nextLink);
    pagination.appendChild(nextButton);
}

function updateContent() {
    var content = document.getElementById("content");
    content.innerHTML = "";

    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    for (var i = startIndex + 1; i <= endIndex; i++) {
        var item = document.createElement("div");
        item.textContent = "Item " + i;
        content.appendChild(item);
    }
}
//Function to generate the table rows
function generateTableRows() {
	var tableBody = document.getElementById("tableBody");
	tableBody.innerHTML = "";

	var startIndex = (currentPage - 1) * itemsPerPage;
	var endIndex = Math.min(startIndex + itemsPerPage, totalItems);

	for (var i = startIndex + 1; i <= endIndex; i++) {
		var row = document.createElement("tr");
		for (var j = 0; j < 7; j++) {
			var cell = document.createElement("td");
			cell.textContent = "Row " + i + ", Cell " + (j + 1);
			row.appendChild(cell);
		}
		tableBody.appendChild(row);
	}
}
// Initial pagination and content
generatePagination();
updateContent();

function generatePagination() {
	var pagination = document.getElementById("pagination");
	pagination.innerHTML = "";

	var totalPages = Math.ceil(totalItems / itemsPerPage);

	var prevButton = document.createElement("li");
	var prevLink = document.createElement("a");
	prevLink.href = "#";
	prevLink.textContent = "Previous";
	prevLink.addEventListener("click", function () {
		if (currentPage > 1) {
			currentPage--;
			generateTableRows();
		}
});
prevButton.appendChild(prevLink);
            pagination.appendChild(prevButton);

            for (var i = 1; i <= totalPages; i++) {
                var pageButton = document.createElement("li");
                var pageLink = document.createElement("a");
                pageLink.href = "#";
                pageLink.textContent = i;
                pageLink.addEventListener("click", function () {
                    currentPage = parseInt(this.textContent);
                    generateTableRows();
                });
                pageButton.appendChild(pageLink);
                pagination.appendChild(pageButton);
}
var nextButton = document.createElement("li");
            var nextLink = document.createElement("a");
            nextLink.href = "#";
            nextLink.textContent = "Next";
            nextLink.addEventListener("click", function () {
                if (currentPage < totalPages) {
                    currentPage++;
                    generateTableRows();
                }
            });
            nextButton.appendChild(nextLink);
            pagination.appendChild(nextButton);
        }

// Initial table and pagination
generateTableRows();
generatePagination();
