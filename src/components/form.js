import React, {useState } from 'react'
import Button from './button';
import InputForm from './inputForm';
import Title from './title';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { App } from '../ultils/firebase';

function Form() {
    const [error, setError] = useState(null)
    const [secess, setCecess] = useState(null)
    //inserir dados do formulario no firebase
    async function inserBd(e) {
        e.preventDefault()
        const { name, age, cpf, maritalStatus, city, state } = e?.target?.elements
        const db = getFirestore(App);
        if (name.value || age.value || cpf.value || maritalStatus.value|| city.value || state.value) {
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    name: name.value,
                    age: age.value,
                    cpf: cpf.value,
                    maritalStatus: maritalStatus.value,
                    city: city.value,
                    state: state.value
                });
                console.log("Document written with ID: ", docRef.id);
                setCecess("Cadastrado com sucesso")
                setTimeout(() => {
                    setCecess(null)
                    window.location.reload()
                }, 2000)
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        } else {
            setError("Erro !")
            setTimeout(() => {
                setError(null)
            }, 2000) 
        }
    }
    return (
        <form className="flex w-full h-full flex-col p-5 justify-center items-center z-10" onSubmit={(e) => inserBd(e) }>
            <Title className=" flex justify-center m-2 font-bold text-2xl">Formulario de cadastro</Title>
            <div className='w-full flex'>
                <InputForm placeholder="Nome" type="text" name="name"></InputForm>
                <InputForm placeholder="Idade" type="number" name="age"></InputForm>
            </div>

            <div className='w-full flex'>
                <InputForm placeholder="Estado Civil" type="text" name="maritalStatus"></InputForm>
                <InputForm placeholder="CPF" type="text" name="cpf"></InputForm>
            </div>
            <div className='w-full flex'>
                <InputForm placeholder="Cidade" type="text" name="city"></InputForm>
                <InputForm placeholder="Estado" type="text" name="state"></InputForm>
            </div>
            <div className='w-full flex justify-center items-center   p-5'>
                <Button className="flex bg-gray-600 p-2 w-50 h-50 hover:bg-slate-700 rounded-md" type={"submit"}>Inserir</Button>
            </div>

            <div className='flex justify-center items-center '>
                {secess && <span className='bg-green-400 p-2'>{secess}</span>}
                {error && <span className='bg-red-400 p-2'>{error}</span>}

            </div>
        </form>
    );
}

export default Form;
