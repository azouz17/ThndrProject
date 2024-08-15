'use client';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function AntForm(){
      return (
           <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onSubmit}
      >
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
  };