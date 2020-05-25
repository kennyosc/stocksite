import React from 'react'
import { Form, Input, Button } from 'antd'
import InputForm from './single/formItem'
import './Register.css'
import axios from 'axios'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 15 },
};

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            noKtp: '',
            noNpwp: '',
            alamat: '',
            kecamatan: '',
            kelurahan: '',
            kodePos: '',
            noHandphone: '',
            jenisKelamin: ''
        }
    }

    validateMessages = (label, min, max) => {
        return (
            {
                required: `${label} is required!`,
                types: {
                    email: `${label} is not validate email!`,
                    number: `${label} is not a validate number!`,
                },
                number: {
                    range: `${label} must be between ${min} and ${max} `,
                },
            }
        )
    };

    onFinish = async (values) => {
        const { name, email, password, passwordConfirmation, noKtp, noNpwp, alamat, kecamatan, kelurahan, kodePos, noHandphone, jenisKelamin } = values
        const data = {
            name, email, password, passwordConfirmation, noKtp, noNpwp, alamat, kecamatan, kelurahan, kodePos, noHandphone, jenisKelamin
        }
        const registerResponse = await axios.post('http://localhost:3000/auth/register', data)
        console.log(registerResponse)
    };

    render() {
        return (
            <div className='register-background' >
                <div className='container p-5 d-flex justify-content-center' >
                    <div className='row'>
                        <div class="card" style={{ width: '59em' }}>
                            <div class="card-body p-5" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '59em' }}>
                                <h1 style={{ color: '#1890ff' }}>Register</h1>
                                <Form className='mt-5' {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={this.validateMessages}>
                                    <InputForm name='name' label='Name' rules={{ required: true }} />
                                    <InputForm name='email' label='Email' rules={{ required: true }} />
                                    <InputForm name='password' label='Password' rules={{ required: true }} />
                                    <InputForm name='passwordConfirmation' label='Password Confirmation' rules={{ required: true }} />
                                    <InputForm name='noKtp' label='No. KTP' />
                                    <InputForm name='noNpwp' label='No. NPWP' />
                                    <InputForm name='alamat' label='Alamat' />
                                    <InputForm name='kecamatan' label='Kecamatan' />
                                    <InputForm name='kelurahan' label='Kelurahan' />
                                    <InputForm name='kodePos' label='Kode Pos' />
                                    <InputForm name='noHandphone' label='No. Handphone' rules={{ required: true }} />
                                    <InputForm name='jenisKelamin' label='Jenis Kelamin' />
                                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 19 }}>
                                        <button className='btn btn-primary'>Submit</button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default Register