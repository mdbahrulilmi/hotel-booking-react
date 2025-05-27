import FilterCard from "./Card/FilterCard";

function Sidebar()
{
    const listFilter = [
        {
            title : 'Filter Popular',
            items : ['Hotel', 'Kolam Renang', 'Resepsionis', 'Restoran', 'Bayar Di Hotel']
        },
        {
            title : 'Star Rating',
            items : ['⭐⭐⭐⭐⭐','⭐⭐⭐⭐⭐','⭐⭐⭐','⭐⭐⭐','⭐']
        },
        {
            title : 'Guest Rating',
            items : ['9','8','7','6','5']
        },
        
    ]

    return (
        <div className="w-1/5">
            {listFilter.map((group,index) => (
                <FilterCard 
                    key={index} 
                    title={group.title}
                    items={group.items}
                />
            ))}        
        </div>
    )
}

export default Sidebar;