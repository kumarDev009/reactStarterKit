import { Menu } from 'antd';

export default function CustomMenu({
    menuItems = [],
    mode = "inline",
    theme = "dark",
    selectedKeys,
    onClick = () => { },
    ...rest
}) {

    return (
        <div>
            <Menu
                selectedKeys={selectedKeys}
                theme={theme}
                mode={mode}
                onClick={onClick}
                items={menuItems}
                {...rest}
            />
        </div>
    )
}
