"use client";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");

  // Fetch all categories
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("http://localhost:8080/api/blogcategories");
      const data = await res.json();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  // Handle editing category
  const handleEdit = (category) => {
    setEditingCategory(category.id);
    setCategoryName(category.category_name);
  };

  // Handle delete category
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8080/api/blogcategories/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setCategories(categories.filter((cat) => cat.id !== id));
      setMessage("Category deleted successfully.");
    } else {
      setMessage("Something went wrong. Please try again.");
    }
  };

  // Handle category update
  const handleUpdate = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:8080/api/blogcategories/${editingCategory}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category_name: categoryName }),
    });

    if (response.ok) {
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory ? { ...cat, category_name: categoryName } : cat
        )
      );
      setMessage("Category updated successfully.");
      setEditingCategory(null);
      setCategoryName("");
    } else {
      setMessage("Failed to update category.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Categories Management</h1>

      {message && (
        <p className="text-center text-lg text-green-500 mb-4">
          {message}
        </p>
      )}

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4 text-left">Category Name</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-b border-gray-200">
              <td className="py-2 px-4">{category.category_name}</td>
              <td className="py-2 px-4 flex space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleEdit(category)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(category.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingCategory && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Category</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded-md"
            >
              Update Category
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
