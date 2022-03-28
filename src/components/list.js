import React, { useEffect, useState } from 'react'
import Button from './button';
import Title from './title';
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { App } from '../ultils/firebase';
import { FcFinePrint } from "react-icons/fc";
import PaginationTest from './pagination';

function List(props) {
    const [date, setDate] = useState(null)
    const [arrayList, setArrayList] = useState([])
    const [reTurn, setReturn] = useState({ value1: 0, value2: 4 })
    const db = getFirestore(App);

    function Separ() {
        const newArray = []
        for (let i = reTurn.value1; i < reTurn.value2; i++) {
            newArray.push(date[i])
        }
        setArrayList(newArray)
    }

    useEffect(() => {
        const arraySolid = []
        async function getDateDatabase() {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                arraySolid.push(doc);
            });
            setDate(arraySolid)
        }
        getDateDatabase()
        if (date) {
            Separ()
        }
    }, [db, date])


    return (
        <div className="flex w-full h-full flex-col p-5 justify-center items-center" >
            <Title className=" flex justify-center m-2 font-bold text-2xl">Lista de usuarios</Title>
            <div className='flex w-full  flex-col '>
                {arrayList?.map((inf, index) => {
                    return (
                        <div className='flex w-full  items-center  justify-around  ' key={index}>
                            <span className='text-justify w-1/3' >{inf?.data().name}</span> <span className=' w-1/3'>{inf?.data().cpf}</span>  <Button className=" text-3xl"><FcFinePrint onClick={() => {
                                props.setPopap(!props.popap)
                                props.setInfo(inf)
                            }} /></Button>
                        </div>
                    )
                })}
                <div className='w-full flex justify-center items-center'>
                    <PaginationTest setReturn={setReturn} ></PaginationTest>
                </div>
            </div>
        </div>
    );
}

export default List;
