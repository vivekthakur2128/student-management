document.getElementById("loadDataBtn").addEventListener("click", function () {
  fetch("show-students.php")
    .then((response) => response.json())
    .then((data) => {
      const tableContainer = document.getElementById("dataTableContainer");
      if (data.error) {
        tableContainer.innerHTML = `<p class="text-red-500">${data.error}</p>`;
        return;
      }

      if (data.length === 0) {
        tableContainer.innerHTML = `<p class="text-gray-600">No data found.</p>`;
        return;
      }
      document.querySelector('body').querySelector('h1').style.display = "block";
      let tableHTML = `
        <table class="min-w-full bg-white border border-gray-200">
            <thead>
                 <tr>
                    <th class="py-2 px-4 border-b text-left text-gray-600">ID</th>
                    <th class="py-2 px-4 border-b text-left text-gray-600">Fullname</th>
                    <th class="py-2 px-4 border-b text-left text-gray-600">father's name</th>
                    <th class="py-2 px-4 border-b text-left text-gray-600">email</th>
                    <th class="py-2 px-4 border-b text-left text-gray-600">gender</th>
                    <th class="py-2 px-4 border-b text-left text-gray-600">phone</th>
                    <th class="py-2 px-4 border-b text-left text-gray-600">address</th>
                    <th class="py-2 px-4 border-b text-left text-gray-600">Date & Time</th>
                </tr>
             </thead>
        <tbody>
        `;

      data.forEach((row) => {
        tableHTML += `
                            <tr>
                                <td class="py-2 px-4 border-b">${row.id}</td>
                                <td class="py-2 px-4 border-b">${row.fullname}</td>
                                <td class="py-2 px-4 border-b">${row.fathername}</td>
                                <td class="py-2 px-4 border-b">${row.email}</td>
                                <td class="py-2 px-4 border-b">${row.gender}</td>
                                <td class="py-2 px-4 border-b">${row.phone}</td>
                                <td class="py-2 px-4 border-b">${row.address}</td>
                                <td class="py-2 px-4 border-b">${row.datetime}</td>
                            </tr>
                        `;
      });

      tableHTML += `
                            </tbody>
                        </table>
                    `;
      tableContainer.innerHTML = tableHTML;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById(
        "dataTableContainer"
      ).innerHTML = `<p class="text-red-500">Failed to load data.</p>`;
    });
});
