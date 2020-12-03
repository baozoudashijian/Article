import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    Form,
    Upload,
    Button,
    Space, message
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {useForm} from "antd/es/form/Form";
import { read } from "./utils";

const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
}


const Game = () => {

    const [form] = useForm()

    const onFinish = (values) => {
        console.log(values);
        let originFile = values.upload[0].originFileObj
        readFile(originFile);
    };

    const readFile = (file) => {
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadstart = e => {

        }
        reader.onprogress = e => {
            // this.progressPercent = Math.round(e.loaded / e.total * 100)
        }
        reader.onerror = e => {
            message.error('文件读取出错')
        }
        reader.onload = e => {
            message.success('文件读取成功')
            const data = e.target.result
            console.log(data)
            const { header, results } = read(data, 'array')
            console.log(header, results)
            // const tableTitle = header.map(item => { return { title: item, key: item } })
        }
    }

    return (
        <div className="game">
            <Form
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="./do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            保存
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
}


ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
