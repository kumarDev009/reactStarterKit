import { Layout as AntdLayout } from 'antd';

const { Footer: AntdFooter } = AntdLayout;

export default function CustomFooter() {
  return (
    <div className="d-flex justify-content-center align-item-center">
      <AntdFooter>{new Date().getFullYear()} © All Right Reserved. MitrahSoft</AntdFooter>
    </div>
  );
}
