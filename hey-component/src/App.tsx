import React, {useEffect, useState} from 'react';
import Home from "./components/Home/index";
import {Table, Modal, Form} from "antd";
import { mockData } from './Mock'
import { columns } from "./data.d";

function App() {
    const [form] = Form.useForm()
    const [visible, setVisible] = useState(false)
    const [editInitialData, setEditInitialData] = useState({
        id: '',
        name: '',
        age: '',
    })

    const columnsHandler = [
        {
            title: '操作',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            render: (_: any, record: any) => {
                return (
                    <a
                        onClick={() => handleEdit(record)}
                        style={{margin: '0 10px'}}
                    >
                        编辑
                    </a>
                )
            }
        }
    ]

    // 点击编辑按钮
    const handleEdit = (record: any) => {
        setVisible(true)
        setEditInitialData(record)
    }
    // 点击Modal
    const onOk = () => {
        form.validateFields().then((res:any) => {
            console.log(res)
        })
    }



    useEffect(() => {
        console.log('App组件')
    }, [])

    return (
        <div className="App">
            <Table
                rowKey={'id'}
                columns={columns.concat(columnsHandler)}
                dataSource={mockData}
            />
            <Modal
                visible={visible}
                onCancel={() => setVisible(false)}
                onOk={onOk}
                afterClose={() => form.resetFields()}
            >
                <Home
                    form={form}
                    data={editInitialData}
                />
            </Modal>

        </div>
    );
}

export default App;
