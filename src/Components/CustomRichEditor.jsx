import React from 'react';
import { Form } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//Tool Bar Options Configuration
const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['link', 'image', 'video'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }]
    ]
};

const RichTextEditor = ({
    label = '',
    name = '',
    value = '',
    onChange = () => { }
}) => {

    return (
        <Form.Item label={label} name={name}>
            <ReactQuill
                value={value}
                onChange={onChange}
                modules={modules}
                style={{ height: '300px' }}
            />
        </Form.Item>
    );
}

export default RichTextEditor;