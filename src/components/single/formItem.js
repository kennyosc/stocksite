import React from 'react'
import { Form, Input } from 'antd'


const InputForm = (props) => {
    const addRules = props.rules ? props.rules : {}
    return (
        <Form.Item name={props.name} label={props.label} rules={[addRules]}>
            <Input />
        </Form.Item>
    )
}

export default InputForm