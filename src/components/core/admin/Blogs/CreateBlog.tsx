"use client";
import React, { useState, useRef, useMemo } from "react";
import toast from "react-hot-toast";
import JoditEditor from "jodit-react";


interface FormData {
  title: string;
  categories: string[]; 
  image: string | null;
}



const CreateBlogForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    categories: [],
    image: null,
  });
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
    }),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to convert image file to Base64
  const convertToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string); // Return base64 string
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const base64Image = await convertToBase64(file); // Convert file to Base64
        setFormData((prev) => ({ ...prev, image: base64Image })); // Store base64 string
      } catch (error) {
        console.error("Error converting file to Base64", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !content || formData.categories.length === 0) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    try {
      // Prepare data to send
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("categories", JSON.stringify(formData.categories));
      formDataToSend.append("description", content);
      
      // Send Base64 image string if available
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      const response = await fetch("/api/blogs", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Blog created successfully!");
        setFormData({
          title: "",
          categories: [],
          image: null,
        });
        setContent(""); // Clear the editor
      } else {
        toast.error(result.error || "Failed to create blog.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim()) {
      setFormData((prev) => ({
        ...prev,
        categories: [...prev.categories, e.currentTarget.value.trim()],
      }));
      e.currentTarget.value = ""; // Clear the input after adding
    }
  };

  const handleCategoryRemove = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.filter((cat) => cat !== category),
    }));
  };

  return (
    <div className="bg-white md:p-6 p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            {/* Title Input */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Enter blog title"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Upload Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Categories
              </label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Press Enter to add categories"
                onKeyDown={handleCategoryAdd}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    {category}
                    <button
                      type="button"
                      onClick={() => handleCategoryRemove(category)}
                      className="text-sm font-semibold text-white"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={(newContent) => setContent(newContent)}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-white rounded-md ${
            loading ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
