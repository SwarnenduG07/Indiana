import { opsitons } from "@/constants"

const ThingsToDo = () => {
  return (
    <div className="bg-black  backdrop-blur-sm text-white mr-96 mb-20">
    <div className="flex justify-between">
      <div className="space-y-4">
        <div className="font-bold ml-20 mr-56 pr-10">Popular places</div>
        <div className="space-y-2 ml-20">
          {opsitons.map((option) => (
            <div key={option.href}>
              <a
                href={option.href}
                className="cursor-pointer hover:underline"
              >
                {option.label}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">Explore all places to visit</h2>
        <ul className="space-y-2">
          <li>North Island</li>
          <li>South Island</li>
          <li>Other islands</li>
          <li>Explore by map</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ThingsToDo