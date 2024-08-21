import { explore, ThinkstoDo } from "@/constants"

const ThingsToDo = () => {
  return (
    <div className="bg-black backdrop-blur-sm text-white mr-72 ">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="font-bold ml-20 mr-56  whitespace-nowrap">Things To Do</div>
          <div className="space-y-2 ml-20">
            {ThinkstoDo.map((option) => (
              <div key={option.href}>
                <a
                  href={option.href}
                  className="cursor-pointer hover:underline whitespace-nowrap"
                >
                  {option.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThingsToDo