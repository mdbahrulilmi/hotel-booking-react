export default function List()
{
    const fruit = ['apple','banana','pear'];

    return (
        <ul>
            {
                fruit.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    );
}