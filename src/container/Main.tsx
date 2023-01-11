import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from "../assets/1.png"









const Main = () => {

    const [data, setData] = useState([]);
     

    const getData = async () => {
        try {

            const options = {
                method: 'GET',
                url: 'https://soundcloud-scraper.p.rapidapi.com/v1/user/likes',
                params: { user: 'https://soundcloud.com/atlantic-records-uk' },
                headers: {
                    'X-RapidAPI-Key': 'b0995ea439mshd3e616493010c8ep18375djsn58aad6e5f0c0',
                    'X-RapidAPI-Host': 'soundcloud-scraper.p.rapidapi.com'
                }
            };
            const response = await axios.request(options)
            console.log(response.data.likes.item);
            setData(response.data.likes.item);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='main-con'>
                <div className='log'>
                    <img src={logo} alt='logo ' />
                </div>
                <div className='quteos m-5'>
                    <h1 className='txt mt-5'>Your favourite tunes</h1>
                    <h4>All Sun and all Moon</h4>
                </div>
            </div>
            <div className='data-con '>
                <h3 className='rel'>RELEASED THIS WEEK</h3><span><div className='line'></div></span>
            </div>
            <div className='api-data'>
                {data.map((res) => {
                    const { item } = res;
                    const { artworkUrl, id,title } = item;
                    return (
                        <>
                            <div key={id} >
                                <img src={artworkUrl} alt='artwork' className='art' />
                                <p>{title}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Main