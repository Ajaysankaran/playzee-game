import React, { useEffect, useState } from 'react'
import Dialog from './Dialog'
import { Button, TextField } from '@mui/material'

interface LoginDialogProps {
  showDialog: boolean
  closeDialog: () => void
}

const LoginDialog = (props: LoginDialogProps) => {

  const [dialog, showDialog] = useState(false)
  const [username, setUserName] = useState(null)
  const [password, setPassword] = useState(null)

  useEffect(() => {
    showDialog(props.showDialog)
  }, [props.showDialog])

  const login = () => {
    if (username && password) {
      
    }
  }

  const body = <div>
    <div className="grid grid-cols-1">
      <label className='text-gray-500'>Username / Email </label>
      <TextField variant="standard" value={username}/>
      <label className='text-gray-500'>Password</label>
      <TextField variant="standard" value={password} />
    </div>
    <div className="mt-3 mb-3 flex justify-center">
      <Button variant="contained" onClick={login}>Login</Button>
    </div>
  </div>

  const footer = <div className='flex justify-end p-3'>
    <Button variant='contained' onClick={props.closeDialog}>close</Button>
  </div>

  return (
    <Dialog body={body} show={dialog} footer={footer}>
    </Dialog>
  )
}

export default LoginDialog