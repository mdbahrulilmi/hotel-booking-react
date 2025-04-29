const user = {
    name: 'Naruto Uzumaki',
    imageUrl: 'https://ikatemijateng.com/wp-content/uploads/2020/08/naruto-uzumaki-958x537-c5404dbaf1d6e28da1df3330a72d0e8a_600x400.png',
    imageSize: 90,
}

export function Profile()
{
    return(
        <>
            <img 
            src={user.imageUrl} 
            alt={'Photo of' + user.name} 
            style={{
                width: user.imageSize,
                height: user.imageSize,
                borderRadius: 100,
                objectFit:"cover",
            }} 
            />
            <h1>{user.name}</h1>
            
        </>
    );
}