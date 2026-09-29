import { useState } from "react";

export default function NewModuleForm() {

  const [formData, setFormData] = useState({
    moduleName: "",
    moduleContent: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex bg-white w-full justify-center items-center">
      <div className="p-4 sm:p-8 w-full max-w-xl mx-4 sm:mx-auto">

        <h1 className="text-3xl font-bold color-gold mb-10 text-left">
          Module
        </h1>

        <form className="flex flex-col gap-10">

          {/* MODULE NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-gray-700">
              Module Name
            </label>
            <input
              name="moduleName"
              type="text"
              className="bg-white/95 rounded-2xl p-5 w-full input-style-no-fx-w"
              value={formData.moduleName}
              onChange={handleChange}
              placeholder="Module Name"
            />
          </div>

          {/* MODULE CONTETN */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-gray-700">
              Module Content
            </label>
            <textarea
              name="moduleContent"
              className="bg-white/95 rounded-2xl p-5 w-full h-40 resize-none input-style-no-fx-w"
              value={formData.moduleContent}
              placeholder="Enter the content of the module here..."
              onChange={handleChange}
            />
          </div>

        </form>

      </div>
    </div>
  );
}
