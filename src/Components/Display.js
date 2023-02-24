import Structure from './Structure';
import {useState , useEffect} from 'react';
function ShowPage()
{
    const [loadStatus,setLoadStatus]=useState(true);
    const[update,setUpdate]=useState([]);
    useEffect(()=>
    {
        fetch('https://codingwiz-query-default-rtdb.firebaseio.com/tempuser.json').then
        (response=>response.json()).then(data=>
            {
                const users=[];
                for(let key in data)
                {
                    const user_detail={
                        id:key,
                        ...data[key]                    
                }
                users.push(user_detail);
                setLoadStatus(false);
                setUpdate(users);
            }
            console.log(update);
            // console.log('Important Note : Any update please check passing value in down while calling structure component and firebase column name must be updated!!!');

    })
    },[])
    return(
        <div>
            <h1 className='x-schedule'>Number Of Registered Student </h1>
            {/* animation gif */}
            <div class={loadStatus?'center':'d-none'}>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            {/* end gif */}
            <div className='structure-display'>
                {
                    update.map((x)=>
                    {
                        return <Structure name={x.Name} p_no={x.Phone_Number} course={x.Course} query={x.Query}/>
                    })
                }
            </div>
        </div>
    );
}

export default ShowPage;