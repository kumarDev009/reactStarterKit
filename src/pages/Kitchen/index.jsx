
// import { message } from "antd"

import { CustomButton } from "../../Components/FormFields/CustomButton";
import { InputField } from "../../Components/FormFields/CustomInputfield";
import { CustomTitle } from "../../Components/FormFields/CustomTitle";

const Kitchen = () => {


    return (
        <>
            <div className="d-flex p-5 ">
                <div className="w-25">
                    <CustomButton className="px-0" type="link" buttonText={"This is used for link!"} />
                    <CustomButton className="px-0" buttonText={' This is used for button link!'} htmlType="button" type="link" />
                    <CustomButton className={'w-100'} buttonText={'Login'} htmlType="submit" />
                </div>
                <div className="w-25">
                    <InputField
                        name="email"
                        label="Input Field"
                        rules={[{ required: true, message: 'Please Enter Input Field' }]}
                        placeholder="Input Field"
                        className={'mb-0'}
                    />
                </div>
                <div className="w-25">
                    <CustomTitle title_text="Custom Title" text_level={3} />
                </div>
            </div>
        </>
    );
};

export default Kitchen
