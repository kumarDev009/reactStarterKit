import { Layout as AntdLayout, Row } from 'antd';

const { Footer: AntdFooter } = AntdLayout;

export default function CustomFooter() {
  return (
    <Row justify={'center'} align={'middle'}>
      <AntdFooter>{new Date().getFullYear()} © All Right Reserved. MitrahSoft</AntdFooter>
    </Row>
  );
}
