'use client';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from "react";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function AntForm(){
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const handleChange = (event: any) =>{
      setUsername(event.username)
      setPassword(event.password)
  }
  async function getData() {
    const url = "https://example.org/products.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error: any) {
      console.error(error.message);
    }
      return (
           <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onSubmit}
        onValuesChange = {handleChange}
      >
        <p>{username}</p>
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
    
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
    
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      );
}
const onSubmit: FormProps<FieldType>['onFinish'] = (values) => {
    if(values.username == "mostafa" && values.password == "12345"){
        console.log("succesfully logged in")
    }
    else{
        console.log('Login Failed')
    }

  }
}