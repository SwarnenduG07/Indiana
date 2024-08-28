import { explore, opsitons } from "@/constants";

const PlaceToVisitContent = () => {
  return (
    <div className="flex gap-12 px-8 py-5 bg-slate-900 backdrop-blur-lg bg-opacity-75">
      <div className="space-y-4 mr-4">
        <div className="font-bold text-lg text-cyan-200 whitespace-nowrap">
          Popular Places
        </div>
        <div className="space-y-2 mr-4">
          {opsitons.map((option) => (
            <div key={option.href}>
              <a
                href={option.href}
                className="cursor-pointer hover:text-yellow-300 hover:font-semibold whitespace-nowrap"
              >
                {option.label}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-lg text-cyan-200 whitespace-nowrap">
          Explore all Places to Visit
        </h2>
        <div className="space-y-2">
          {explore.map((explore) => (
            <div key={explore.href}>
              <a
                href={explore.href}
                className="cursor-pointer hover:font-semibold hover:text-yellow-300 whitespace-nowrap"
              >
                {explore.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceToVisitContent;
