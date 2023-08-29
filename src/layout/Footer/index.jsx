import { Layout as AntdLayout } from 'antd';

const { Footer: AntdFooter } = AntdLayout;

export default function CustomFooter() {
  return (
    <div className="flex-shrink-0 footer">
      <AntdFooter>{new Date().getFullYear()} © All Right Reserved. MitrahSoft</AntdFooter>
    </div>
  );
}
