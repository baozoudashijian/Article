import React, {useEffect, useState} from "react";
import {Form, Input, Select} from "antd";
import {Option} from "antd/es/mentions";

const Home: React.FC<{ data: any, form: any }> = (props) => {

    const { data, form } = props;
    // 选择城市Form.Item是否选择.
    const [cityCode, setCityCode] = useState()
    // props设置为state
    const [song, setSong] = useState()
    // const [layout, setLayout] = useState(null) // 无关
    const [layout, setLayout] = useState()

    useEffect(() => {
        data.cityCode ? setCityCode(true) : setCityCode(false)
        console.log(data.favouriteSong)
        setSong(data.favouriteSong)
        setLayout(data.layout)
    }, [])

    const handleChange = (value: any) => {
        Number(value) ? setCityCode(true) : setCityCode(false)
    }

    return (
        <>
            {console.log('更新组件!')}
            {
                // 当state更新的时候, 我们才渲染, initialValue只渲染第一次.
                song !== undefined && <Form
                    style={{marginTop: 40}}
                    form={form}
                    name='basic'
                >
                    <Form.Item
                        label='userID'
                        name='id'
                        initialValue={data.id}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label='姓名'
                        name='name'
                        initialValue={data.name}
                    >
                        {/*这个defaultValue Form.Validate方法取不到值: 合理*/}
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label='年龄'
                        name='age'
                        initialValue={data.age}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label='城市'
                        name='city'
                        initialValue={data.city}
                    >
                        <Select onChange={handleChange}>
                            <Option value="1">有</Option>
                            <Option value="0">无</Option>
                        </Select>
                    </Form.Item>
                    {
                        cityCode && <Form.Item
                            label='选择城市'
                            name='cityCode'
                            initialValue={data.cityCode}
                        >
                            <Select placeholder={"请选择城市"}>
                                <Option value="0791">北京</Option>
                                <Option value="0792">上海</Option>
                                <Option value="0793">广州</Option>
                            </Select>
                        </Form.Item>
                    }
                    <Form.Item
                        name='favouriteSong'
                        label="最爱的歌曲"
                        initialValue={song}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='layout'
                        label="布局"
                        initialValue={layout}
                    >
                        <Select>
                            <Option value={"1"} >布局1</Option>
                            <Option value={"2"} >布局2</Option>
                            <Option value={"3"} >布局3</Option>
                            <Option value={"4"} >布局4</Option>
                        </Select>
                    </Form.Item>

                </Form>
            }

        </>
    )
}
export default Home