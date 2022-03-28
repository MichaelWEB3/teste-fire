import React, { useEffect, useState } from 'react'
import InputForm from './inputForm';
import { FcDataBackup, FcUndo, FcDeleteDatabase } from "react-icons/fc";
import Button from './button';
import { doc, updateDoc, getFirestore, deleteDoc } from "firebase/firestore";
import { App } from '../ultils/firebase';


function Popap(props) {
    const db = getFirestore(App);
    const [name, setName] = useState(props?.inf?.data()?.name)
    const [age, setage] = useState(props?.inf?.data().age)
    const [cpf, setcpf] = useState(props?.inf?.data().cpf)
    const [state, setstate] = useState(props?.inf?.data().state)
    const [maritalStatus, setmaritalStatus] = useState(props?.inf?.data().maritalStatus)
    const [city, setcity] = useState(props?.inf?.data().city)
    const [msg, setMsg] = useState(null)
    async function update(id) {
        const washingtonRef = doc(db, "users", id);
        await updateDoc(washingtonRef, {
            name,
            age,
            cpf,
            maritalStatus,
            city,
            state
        });

        setMsg("Atualizado")
        setTimeout(() => {
            setMsg(null)
            window.location.reload()
        }, 1000)
    }

    async function delet(id) {
        const washingtonRef = doc(db, "users", id);
        await deleteDoc(washingtonRef, {
            name,
            age,
            cpf,
            maritalStatus,
            city,
            state
        });
        setMsg("Deletado")
        setTimeout(() => {
            setMsg(null)
            window.location.reload()

        }, 1000)
    }
    return (
        <div className={`${props.className} w-full h-full relative  flex`}>
            <Button className="text-2xl"><FcUndo onClick={() => { props?.popapReturn(false) }} /></Button>
            <input className='w-1/2 m-1 p-1 rounded-md text-black' type={props.type || 'text'} placeholder="nome" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input className='w-1/2 m-1 p-1 rounded-md text-black' type={props.type || 'text'} placeholder="idade" value={age} onChange={(e) => setage(e.target.value)}></input>
            <input className='w-1/2 m-1 p-1 rounded-md text-black' type={props.type || 'text'} placeholder="cpf" value={cpf} onChange={(e) => setcpf(e.target.value)}></input>
            <input className='w-1/2 m-1 p-1 rounded-md text-black' type={props.type || 'text'} placeholder="estado civil" value={maritalStatus} onChange={(e) => setmaritalStatus(e.target.value)}></input>
            <input className='w-1/2 m-1 p-1 rounded-md text-black' type={props.type || 'text'} placeholder="cidade" value={city} onChange={(e) => setcity(e.target.value)}></input>
            <input className='w-1/2 m-1 p-1 rounded-md text-black' type={props.type || 'text'} placeholder="estado" value={state} onChange={(e) => setstate(e.target.value)}></input>
            <Button className="text-2xl">
                <FcDataBackup onClick={() => update(props?.inf?.id)} />
            </Button>
            <Button className="text-2xl">
                <FcDeleteDatabase onClick={() => delet(props?.inf?.id)} />
            </Button>
            <br />
            <div className='flex justify-center items-center '>
                {msg && <span className='bg-green-400 p-2'>{msg}</span>}
            </div>
        </div>
    );
}

export default Popap;
