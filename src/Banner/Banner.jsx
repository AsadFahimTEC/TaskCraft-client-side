const Banner = () => {
  return (
    <div className="mt-4">
      <div className="bg-red-200 p-4 md:p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:max-w-md mr-0 md:mr-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Sculpting Success, One Task at a Time
          </h1>
          <p className="text-gray-600">
            TaskCraft is your ultimate productivity companion, designed to streamline your workflow and elevate your efficiency. Seamlessly manage tasks, deadlines, and projects with intuitive features. TaskCraft empowers you to conquer your goals and achieve success with ease.
          </p>
          <a
            href="/login"
            className="mt-4 inline-block px-6 py-3 text-white bg-blue-500 rounded hover:bg-green-700 transition duration-300"
          >
            Let's Explore
          </a>
        </div>
        <div className="flex-shrink-0">
          <img
            src="https://i.ibb.co/kqZYTqs/task-management-process-removebg-preview.png"
            alt="Banner Image"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
