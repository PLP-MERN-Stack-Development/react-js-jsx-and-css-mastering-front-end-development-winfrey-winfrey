// src/components/ApiDataFetcher.jsx
import { useEffect, useState } from "react";

export default function ApiDataFetcher() {
  const [data, setData] = useState([]); // fetched API data
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(""); // error message
  const [page, setPage] = useState(1); // pagination
  const [search, setSearch] = useState(""); // search input

  const itemsPerPage = 6; // how many items to show per page

  // Fetch data from the public API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter data by search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">User Directory</h1>

      {/* Search Bar */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset to page 1 when searching
          }}
          className="border p-2 rounded w-1/2"
        />
      </div>

      {/* Loading State */}
      {loading && <p className="text-center text-blue-600">Loading data...</p>}

      {/* Error State */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Data Grid */}
      {!loading && !error && (
        <>
          {currentData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentData.map((user) => (
                <div
                  key={user.id}
                  className="border p-4 rounded shadow hover:shadow-lg transition"
                >
                  <h2 className="font-semibold text-lg">{user.name}</h2>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500">{user.company.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No users found</p>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-gray-700">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
