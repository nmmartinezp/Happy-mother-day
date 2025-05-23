function GithubCard() {
  return (
    <div className="text-white flex items-center p-4 rounded-lg shadow-md w-max">
      <img
        src="./github.svg"
        alt="GitHub logo"
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <h2 className="text-gray-600 font-semibold text-sm leading-tight">
          nmmartinezp
        </h2>
        <p className="text-zinc-400 font-bold text-xs">Desarrollador Web</p>
      </div>
    </div>
  );
}

export default GithubCard;
