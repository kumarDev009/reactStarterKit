import { Button, Form } from "antd";

const { Item: FormItem } = Form;

export const CustomButton = ({
  onClick = () => {},
  buttonType = "primary",
  buttonText = "",
  className = "",
  htmlType = "",
  ...rest
}) => {
  return (
    <div>
      <FormItem {...rest}>
        <Button
          onClick={onClick}
          className={className}
          type={buttonType}
          htmlType={htmlType}
          {...rest}
        >
          {buttonText}
        </Button>
      </FormItem>
    </div>
  );
};
