import React from "react";
import {Button, Form, Upload} from "antd";
import { UploadOutlined } from '@ant-design/icons';
import {useForm} from "antd/es/form/Form";

/*
* 1. Upload的值可以通过getValueFromEvent值获取
* 2. 富文本编辑器关联
*
* */

const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

const GetValueFromEvent: React.FC<{}> = (props) => {

    const [form] = useForm()

    const btnClick = () => {
        // 点击按钮加上富文本编辑器的值
        // form.setFieldsValue({content: editorValue})
        console.log(form.getFieldsValue())
    }

    const handlePreview = () => {

    }

    const handleChange = () => {

    }


    return (
        <>
            <Form
                form={form}
            >
                <Form.Item
                    name="images"
                    label="Upload"
                    // valuePropName="fileList1"
                    getValueFromEvent={normFile}
                >
                    <Upload
                        action="https://test-api-console.yunshangjiankang.com/api/oss/upload"
                        listType="picture-card"
                        data={(file: any) => ({
                            multipartFile: file,
                        })}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
            </Form>
            <Button onClick={btnClick}>点击获取form信息</Button>
        </>
    )
}

export default GetValueFromEvent