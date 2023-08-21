import { Checkbox, Form } from 'antd'

const { Item: FormItem } = Form;
export const CheckBoxField = ({
    name = "",
    onChange = () => { },
    label = "",
    ...rest
}) => {
    return (
        <div>
            <FormItem
                name={name}
                {...rest}
            >
                <Checkbox
                    onChange={onChange}
                    {...rest}
                >
                    {label}
                </Checkbox>
            </FormItem>
        </div>
    )
}
