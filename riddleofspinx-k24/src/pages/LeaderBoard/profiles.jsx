import React from 'react';
import { FaRankingStar } from "react-icons/fa6";
import { AuthContext } from '@/context/AuthContext';
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

function Profiles({ Leaderboard }) {
    return (
        <div className="flex justify-center">
            {Array.isArray(Leaderboard) && Leaderboard.length > 0 ? (
                item(Leaderboard)
            ) : (
                <>
                    <h1 className='text-5xl bg-yellow-300 p-4 font-title text-black rounded-xl m-2 text-center'>Leaderboard will be openend at Sunday 9pm.</h1>
                    <div className="fixed bottom-5 left-5 flex flex-col sm:flex-row">
                        <Link to='/scoreboard' className="">
                            <button className="w-full p-4 m-1 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">ScoreBoard</button>
                        </Link>
                        <Link to="/rounds" className="sm:mx-2">
                            <button className="w-full p-4 m-1 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
                                Go to Rounds
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

function item(data) {
    const { rank, fetchRank } = useContext(AuthContext);
    useEffect(() => {
        fetchRank();
    }, {});
    //console.log(data);
    return (
        <div className='w-full sm:flex sm:justify-center sm:items-center mb-10 flex-col'>
            <div className='sm:min-w-[80%] min-w-[100%] mb-2 font-title bg-yellow-500 rounded-2xl shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
                <h3 className="pt-5 sm:px-10 px-2 text-xl font-bold text-white sm:text-left text-center">YOUR LEADERBOARD STANDING</h3>
                <div className='sm:flex'>
                    <div className='sm:flex text-center sm:text-left '>
                        <h1 className="py-5 font-extrabold sm:pl-10 text-8xl text-white">{rank.rank}</h1>
                        <h1 className="sm:py-5 py-2 sm:pl-5 font-medium text-xl mt-auto mb-3 text-white">out of {data.length} Players</h1>
                    </div>
                    <div className='ml-auto mr-[1rem] sm:text-9xl text-yellow-200 sm:block hidden'>
                        <FaRankingStar />
                    </div>
                </div>
            </div>
            <div className='sm:min-w-[80%] min-w-[90%] mb-2 font-bold font-title justify-center flex bg-indigo-400 rounded-2xl shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
                <h3 className="sm:py-5 sm:px-10 p-2 sm:text-xl text-md text-white">RANKWISE LEADERBOARD STANDINGS</h3>
            </div>
            <>
                <div className='overflow-x-auto w-full sm:flex justify-center'>
                    <table className='sm:min-w-[80%] min-w-[95%] mx-5 sm:mx-0 sm:text-xl text-md sm:rounded-2xl shadow-2xl bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 text-white font-primary'>
                        <tbody className='font-title'>
                            <td className="py-5 px-10 border-2 sm:border-none border-collapse">Rank</td>
                            <td className="py-5 px-10 border-2 sm:border-none border-collapse">UserName</td>
                            <td className="py-5 px-10 border-2 sm:border-none border-collapse">Email</td>
                            <td className="py-5 px-10 border-2 sm:border-none border-collapse">Score</td>
                        </tbody>
                        {
                            data.map((value, index) => (
                                <tr className={`border-t-4 ${index === 0 ? 'bg-yellow-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60' : ''} ${index === 1 ? 'bg-brown-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60' : ''} ${index === 2 ? 'bg-amber-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60' : ''}`} key={Math.random()}>
                                    <td className="py-5 px-10 sm:text-2xl text-xl font-title border-2 sm:border-none border-collapse">
                                        <h2>{index + 1}</h2>
                                    </td>
                                    <td className="py-5 px-10 sm:flex sm:items-center border-2 sm:border-none border-collapse">
                                        <img src={value.user.character} alt="avatar" className='h-16 rounded-2xl sm:block hidden'></img>
                                        <span className="name text-dark ml-5 uppercase">{value.user.firstname}</span>
                                    </td>
                                    <td className="py-5 px-10 border-2 sm:border-none border-collapse">
                                        <h3>{value.user.email}</h3>
                                    </td>
                                    {/* <div className="item"></div> */}
                                    <td className="py-5 px-10 text-2xl font-title border-2 sm:border-none border-collapse">
                                        <h3>{value.scorer1 + value.scorer2}</h3>
                                    </td>
                                </tr>
                            ))}

                    </table>
                </div>
            </>
            <div className="fixed bottom-5 left-5 flex flex-col sm:flex-row">
                <Link to='/scoreboard' className="">
                    <button className="w-full p-4 m-1 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">ScoreBoard</button>
                </Link>
                <Link to="/rounds" className="sm:mx-2">
                    <button className="w-full p-4 m-1 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
                        Go to Rounds
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Profiles;
