import { Col, Form, Row } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CustomButton } from "../../Components/FormFields/CustomButton";
import { CheckBoxField } from "../../Components/FormFields/CustomCheckBoxField";
import { InputField } from "../../Components/FormFields/CustomInputfield";
import { CustomFooterText, CustomTitle } from "../../Components/FormFields/CustomTitle";
import { LOGIN_FOOTER_DISCLAIMER_TEXT, STATIC_LOGIN_CREDENTIALS } from "../../constants/login";
import { HOME_PATH } from "../../constants/route";
import { AuthContext } from "../../services/context/authContext";
import { setStorage } from "../../utils/storage";

const Login = () => {
    const { setHasStorage } = useContext(AuthContext);

    const navigate = useNavigate();

    const onFinish = (values) => {
        if (values.email === STATIC_LOGIN_CREDENTIALS.email && parseInt(values.password) === STATIC_LOGIN_CREDENTIALS.password) {
            let submittedData = JSON.stringify(values)
            setStorage('username', values.email);
            setHasStorage(submittedData)
            navigate(HOME_PATH, { replace: true })
        } else {
            alert("Enter the valid email and password")
        }
    }
    const footerAreaText = () => {
        return LOGIN_FOOTER_DISCLAIMER_TEXT.map((val, index) => {
            return <CustomFooterText
                className="cursor-pointer"
                footerLabel={val.label}
            />
        })

    }
    return (
        <div>
            <div className="login-bg-image"></div>
            <div>
                <div className="login-screen">
                    <div className="official-logo">
                        <img
                            src="/assets/images/logo.png"
                            alt="mainlogo"
                        />
                    </div>
                    <div className="login-parent-container">
                        <div className="login-container">
                            <Row>
                                <Col span={12}>
                                    <CustomTitle
                                        title_text="Login"
                                        text_level={3}
                                    />
                                </Col>
                                <Col className="d-flex justify-content-end" span={12}>
                                    <CustomButton
                                        className="px-0"
                                        type="link"
                                        buttonText={"Don't have an account ?"}
                                    />
                                </Col>
                            </Row>
                            <Form
                                name="login_form"
                                onFinish={onFinish}
                            >
                                <Row>
                                    <Col span={24}>
                                        <InputField
                                            name="email"
                                            label="Email Address"
                                            rules={[{ required: true, message: 'Please enter your Email!' }]}
                                            className={"mb-0"}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <InputField
                                            name="password"
                                            label="Password"
                                            type="password"
                                            placeholder="Password"
                                            rules={[{ required: true, message: 'Please enter your Password!' }]}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <CheckBoxField
                                            name="remember_me"
                                            label={"Keep me sign in"}
                                        />
                                    </Col>
                                    <Col className="d-flex justify-content-end" span={12}>
                                        <CustomButton
                                            className="px-0"
                                            buttonText={" Forgot Password ?"}
                                            htmlType="button"
                                            type="link"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="w-100" span={24}>
                                        <CustomButton
                                            className={"w-100"}
                                            buttonText={"Login"}
                                            htmlType="submit" />
                                    </Col>
                                </Row>
                            </Form >
                        </div>
                        <Row className="footer-disclaimer-mob ">
                            <Col className="d-flex justify-content-center mt-3">
                                <CustomFooterText
                                    isLink={true}
                                    footerLabel={"This site is protected by "}
                                    linkText="Privacy Policy"
                                />
                            </Col>
                            <Col className="d-flex gap-5 mt-2">
                                {footerAreaText()}
                            </Col>
                        </Row>
                    </div>
                    <Row className="footer-disclaimer">
                        <Col span={9} className="d-flex justify-content-center">
                            <CustomFooterText
                                isLink={true}
                                footerLabel={"This site is protected by "}
                                linkText="Privacy Policy"
                            />
                        </Col>
                        <Col span={7}></Col>
                        <Col span={8} className="d-flex gap-3">
                            {footerAreaText()}
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Login