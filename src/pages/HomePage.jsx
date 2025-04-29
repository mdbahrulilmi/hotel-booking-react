import { Profile } from '../components/Profile'
import { Card } from '../components/Card'
import Button from '../components/Button'
import NameForm from '../components/NameForm';
import List from '../components/List';

function HomePage()
{
    return(
        <>
            <Card children={
                <>
                    <Profile/>
                    <List/>
                    
                    <NameForm/>
                    <Button label="show Profile" onClick={()=>{}}/>
                </>
            }/>
        </>
    )
}

export default HomePage;