function FilterCard({title,items})
{
    return(
         <div className="bg-green-200 rounded-xl mb-4">
            <div className="flex items-center px-3 py-2">
                <p className="text-lg font-bold text-gray-900">{title}</p>
            </div>
            <div className="bg-white rounded-xl px-4 py-4 space-y-3">
                {items.map((item, index) => (
                    <label key={index} className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                        <span className="text-base">{item}</span>
                    </label>
                ))}
            </div>
            </div>

    )
}

export default FilterCard;