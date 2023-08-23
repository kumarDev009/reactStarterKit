import { Button, Form, Tooltip } from 'antd';

const { Item: FormItem } = Form;

export const CustomButton = ({
  onClick = () => {},
  buttonType = 'primary',
  buttonText = '',
  className = '',
  htmlType = 'button',
  loading = false,
  title = '',
  placement = 'top',
  block = true,
  ...rest
}) => {
  return (
    <FormItem {...rest}>
      <Tooltip title={title} placement={placement}>
        <Button
          onClick={onClick}
          className={className}
          type={buttonType}
          htmlType={htmlType}
          loading={loading}
          block={block}
          {...rest}
        >
          {buttonText}
        </Button>
      </Tooltip>
    </FormItem>
  );
};
