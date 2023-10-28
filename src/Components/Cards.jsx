/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import Playercart from "./Playercart";

const Cards = () => {
    const [player, setPlayer] = useState(0);
    const [selectPlayer, setSelectPlayer] = useState([]);
    const [totalSalary, setSalary] = useState(0);

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setPlayer(data))
    }, [])

    const handleSelectPlayer = (players)=>{

        const isExists = selectPlayer.find(item=>item.id==players.id);
        if(isExists){
            return alert('The player already exists in the card')
        }
        else{
            setSelectPlayer([...selectPlayer, players])

        }
        let count = players.salary;
        selectPlayer.forEach(item=>{
            count=count+item.salary;
        })
        setSalary(count)
        

        

    }
    
    

    
    return (
        <div className="flex gap-8 justify-center">
            <div className="grid grid-cols-1s md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
         {
            player.map(players=>(
                <div className="card-container">
                <div className="card w-[17rem] bg-[#FFBD47] rounded-lg">
                    <img className="rounded-[50%] text-center mx-auto py-5" src={players.image} alt="" />
                    
                    <h1 className="pl-4 ">
                        <span className="text-[#1b1a1aec] font-bold text-[1rem]">Name</span>
                        <span className="text-[#FFBD47]">.........</span>
                        <span className="text-[#1b1a1aec] font-semibold text-[1rem]">: {players.name}</span>
                        </h1>
                    <h1 className="pl-4 ">
                        <span className="text-[#1b1a1aec] font-bold text-[1rem]">Age</span>
                        <span className="text-[#FFBD47]">.............</span>
                        <span className="text-[#1b1a1aec] font-semibold text-[1rem]">: {players.age}</span>
                        </h1>
                    <h1 className="pl-4 ">
                        <span className="text-[#1b1a1aec] font-bold text-[1rem]">Country</span>
                        <span className="text-[#FFBD47]">....</span>
                        <span className="text-[#1b1a1aec] font-semibold text-[1rem]">: {players.country}</span>
                        </h1>
                    <h1 className="pl-4 ">
                        <span className="text-[#1b1a1aec] font-bold text-[1rem]">Salary</span>
                        <span className="text-[#FFBD47]">........</span>
                        <span className="text-[#1b1a1aec] font-semibold text-[1rem]">: ${players.salary}</span>
                        </h1>

                        <div className="mx-auto text-center py-4">
                            <button onClick={()=>handleSelectPlayer(players)} className="bg-[#0B5ED7] text-white font-semibold px-4 rounded-lg py-2">Add This Player</button>
                        </div>

                </div>
            </div>
            ))
         }

            
        </div>

        <div>
            <Playercart key={player.id} selectPlayer={selectPlayer} totalSalary={totalSalary}></Playercart>
        </div>
        </div>
    );
};

export default Cards;