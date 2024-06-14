import React, { useEffect, useState } from 'react';
import { useHistory, redirect, redirectDocument, useNavigate } from 'react-router-dom'
import '../../css/login.css';
 
export const LoginUser = () => {
    const [username, setUserName] = useState('capitan');
    const [passwordUser, setPasswordUser] = useState('')
    const [loginAttempts, setLoginAttempts] = useState(0);
    

    let navigate = useNavigate();

    const usersTable = [
        {
            iduser: 'QWE753',
            user: 'rey',
            nameuser: 'Miriam',
            firtname: 'Lopez',
            secondname: 'Garcia',
            pass: '67890'
        },
        {
            iduser: 'ZSE321',
            user: 'violeta',
            nameuser: 'Miguel',
            firtname: 'Colin',
            secondname: 'Castro',
            pass: '54321'
        },
        {
            iduser: 'ZXC456',
            user: 'capitan',
            nameuser: 'Rey Carlos',
            firtname: 'Cano',
            secondname: 'Roque',
            pass: '00000'
        },
        {
            iduser: 'RTY889',
            user: 'azteca',
            nameuser: 'Marina',
            firtname: 'Cano',
            secondname: 'Roque',
            pass: '12345'
        },
    ]


    const handleLogin = () => {
        console.log(usersTable)
        const userFound = usersTable.find(user => user.user === username && user.pass === passwordUser)
        console.log('qwertyt => ',userFound)
        if (userFound) {
                console.log('mandar formulario')
                onRedirect();
            } else {
                console.log('error de contraseña')
                setLoginAttempts(loginAttempts + 1)
            }
    }

    const isLoginDisabled = loginAttempts >= 3;

    
    const onRedirect = () => {
        navigate('/comics')
    }


    return (
        <>
            <div className='content-all'>

                <div className='content-empty'>
                </div>
                <div className='content-login'>
                    <input 
                        type='text'
                        placeholder='Usuario'
                        value={username}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setUserName(e.target.value)
                        }}
                    />
                    <br/>
                    <br/>
                    <input 
                        type='password'
                        placeholder='Contaseña'
                        value={passwordUser}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setPasswordUser(e.target.value)
                        }}
                    />
                    <br/>
                    <br/>
                    <button 
                        disabled={isLoginDisabled}
                        onClick={() => {
                            handleLogin();
                        }}
                    >
                        Iniciar Sesion
                    </button>
                </div>

            </div>
        </>
    )
}

export default LoginUser;